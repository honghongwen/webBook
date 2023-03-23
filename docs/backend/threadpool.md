# Treadpool项目中应用

## 配置
项目中使用线程池，最好是重写threadpoolExecutor，而非直接用Executors.new。因为重写的自定义
程度较高，出现问题容易定位。同时，也可记录子线程的traceId等
```java
    @Bean(name = "siteSignRateThreadPoolExecutor")
    public ThreadPoolExecutor siteSignRateThreadPoolExecutor() {
        return new ThreadPoolExecutor(10,
                50,
                60,
                TimeUnit.SECONDS,
                new LinkedBlockingDeque<>(QUEUE_SIZE),
                new ThreadFactory() {
                    final AtomicInteger aInt = new AtomicInteger(1);

                    @Override
                    public Thread newThread(Runnable r) {
                        return new Thread(r, "thread-sign-rate-" + aInt.getAndIncrement());
                    }
                },
                new RejectedExecutionHandler() {
                    @Override
                    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
                        log.error("线程池队列已满，当前线程池信息:{}", executor.toString());
                        throw new ThreadPoolException("当前系统繁忙，请稍后再试");
                    }
                }) {
            @Override
            public void execute(Runnable command) {
                super.execute(wrap(command, MDC.getCopyOfContextMap()));
            }

            @Override
            public Future<?> submit(Runnable task) {
                return super.submit(wrap(task, MDC.getCopyOfContextMap()));
            }

            @Override
            public <T> Future<T> submit(Runnable task, T result) {
                return super.submit(wrap(task, MDC.getCopyOfContextMap()), result);
            }

            @Override
            public <T> Future<T> submit(Callable<T> task) {
                return super.submit(wrap(task, MDC.getCopyOfContextMap()));
            }
        };
    }
```

重新包装任务，让子线程带有traceId，可进行追踪
```java
    public static <T> Callable<T> wrap(final Callable<T> callable, final Map<String, String> context) {
        return () -> {
            if (context == null) {
                MDC.clear();
            } else {
                MDC.setContextMap(context);
            }
            setTraceIdIfAbsent();
            try {
                return callable.call();
            } catch (ThreadPoolException e) {
                log.error("线程池已满.", e);
                throw new ThreadPoolException("当前系统繁忙，请稍后再试");
            } catch (Exception e) {
                log.error("子线程计算错误.", e);
            } finally {
                MDC.clear();
            }
            return null;
        };
    }

    public static Runnable wrap(final Runnable runnable, final Map<String, String> context) {
        return () -> {
            if (context == null) {
                MDC.clear();
            } else {
                MDC.setContextMap(context);
            }
            setTraceIdIfAbsent();
            try {
                runnable.run();
            } catch (ThreadPoolException e) {
                log.error("线程池已满.", e);
                throw new ThreadPoolException("当前系统繁忙，请稍后再试");
            } catch (Exception e) {
                log.error("子线程计算错误.", e);
            } finally {
                MDC.clear();
            }
        };
    }

    public static void setTraceIdIfAbsent() {
        if (MDC.get("traceId") == null) {
            MDC.put("traceId", UUID.randomUUID().toString());
        }
    }
```


## 等待sumbit结果
如代码所示，可以获取到future集合，然后阻塞结果即可获取到最终值
```java
    @Override
    public List<SiteSignRateVO> listSiteRate(List<Site> reportSiteList, SiteSignRateParam param) {
        List<SiteSignRateVO> voList = new ArrayList<>();
        // 由于有分页，所以循环访问db次数可控
        List<Future<SiteSignRateVO>> futureList = new ArrayList<>();
        for (Site site : reportSiteList) {
            SiteSignRateVO vo;
            vo = SiteSignRateVO.init(site.getSiteId(), site.getSiteName());
            Future<SiteSignRateVO> future = siteSignRateThreadPoolExecutor.submit(new EachSiteSignRateTask(param, vo));
            futureList.add(future);
        }

        for (Future<SiteSignRateVO> future : futureList) {
            SiteSignRateVO vo;
            try {
                vo = future.get();
            } catch (Exception e) {
                log.error("获取结果失败", e);
                continue;
            }
            voList.add(vo);
        }
        return voList;
    }
```

## CountDownLatch封装

除了上诉方法阻塞线程池中任务外，还可使用countdownLatch进行阻塞。
一定要注意，如果size是0，及时返回结果，否则为0时还当作了任务，进入不了循环，一直无法countDown，会导致线程一直wait在get那。
```java
        if (Collections.isEmpty(orderIdList)) {
            return vo;
        }

        // 分批查询(每批500条)，1是因为in查询最大为1000条，2是为了速率
        int taskCount = orderIdList.size() / 501 + 1;
        int unitLength = 500;
        // ！注意分片countdown一定要在for循环里count，否则线程一直wait.
        SynchroniseUtil<SiteSignRateVO> synchroniseUtil = new SynchroniseUtil<>(taskCount);
        for (int i = 0; i < orderIdList.size(); i += unitLength) {
            int toIndex = Math.min(i + unitLength, orderIdList.size());
            List<String> subOrderIdList = orderIdList.subList(i, toIndex);
            // 计算核心逻辑
            SubSiteSignRateTask signRateTask = new SubSiteSignRateTask(i, toIndex, vo, param, subOrderIdList, synchroniseUtil);
            siteSplitSignRateThreadPoolExecutor.execute(signRateTask);
        }

        // 等所有线程都计算结束，拿到所有子切片返回结果
        List<SiteSignRateVO> subVoList;
        try {
            subVoList = synchroniseUtil.get(3, TimeUnit.MINUTES);
        } catch (Exception e) {
            log.error("查询已用3分钟，放弃此次查询", e);
            throw new ApiException("数据量过大，请考虑缩小查找范围");
        }
```


```java
@Slf4j
public class SynchroniseUtil<T> {

    private CountDownLatch countDownLatch;

    private final List<T> result = Collections.synchronizedList(new ArrayList<T>());

    public SynchroniseUtil(int count) {
        this.countDownLatch = new CountDownLatch(count);
    }

    public List<T> get() throws InterruptedException{
        countDownLatch.await();
        return this.result;
    }

    public List<T> get(long timeout, TimeUnit timeUnit) throws Exception{
        if (countDownLatch.await(timeout, timeUnit)) {
            return this.result;
        } else {
            throw new RuntimeException("超时");
        }
    }

    public void addResult(T resultMember) {
        result.add(resultMember);
        countDownLatch.countDown();
        log.debug("线程{}已处理1条数据，剩下任务数为:{}",
                Thread.currentThread().getName(),
                countDownLatch.getCount());
    }

    public void addResult(List<T> resultMembers) {
        result.addAll(resultMembers);
        countDownLatch.countDown();
        log.debug("线程{}已处理{}条数据，剩下任务数为:{}",
                Thread.currentThread().getName(),
                resultMembers.size(),
                countDownLatch.getCount());
    }
}
```

```java
@Slf4j
public class SubSiteSignRateTask implements Runnable {

    /** 切片的运单号 **/
    private final List<String> orderIdList;
    /** 返回的切片结果 **/
    private final SynchroniseUtil<SiteSignRateVO> synchroniseUtil;
    /** 切片结束index **/
    private final Integer toIndex;
    /** 切片开始index **/
    private final Integer fromIndex;
    /** 总vo **/
    private final SiteSignRateVO originVO;
    /** 参数 **/
    private final SiteSignRateParam param;

    public SubSiteSignRateTask(Integer fromIndex,
                               Integer toIndex,
                               SiteSignRateVO vo,
                               SiteSignRateParam param,
                               List<String> orderIdList,
                               SynchroniseUtil<SiteSignRateVO> synchroniseUtil) {
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.orderIdList = orderIdList;
        this.synchroniseUtil = synchroniseUtil;
        this.param = param;
        this.originVO = vo;
    }

    @Override
    public void run() {
        log.debug("线程{}正在计算此批次记录,数组下标为[{},{}]", Thread.currentThread().getName(), fromIndex, toIndex);
        SiteSignRateVO vo = SiteSignRateVO.init(originVO.getSiteId(), originVO.getSiteName());
        // 处理业务逻辑
        synchroniseUtil.addResult(vo);
    }
}
```