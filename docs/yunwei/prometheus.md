# Prometheus

[什么是APM](https://www.hellopz.com/2020/09/18/Prometheus-%E7%9B%91%E6%8E%A7%E6%96%B9%E6%A1%88%E7%AE%80%E8%BF%B0/)

## 安装

[官网](https://prometheus.io/)
[下载地址](https://prometheus.io/download/)
[官方文档](https://prometheus.io/docs/prometheus/latest/getting_started/)

最好下载 lts 版本
tar.gz 解压或者 wget 都 ok

## 配置

[官方配置](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)

默认情况下，promethues 会监控本身
配置 prometheus.yml

```shell
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
    - targets: ['localhost:9090']

  - job_name: 'test-application'
    metrics_path: '/actuator/prometheus'
    static_configs:
    - targets: ['localhost:9527']

```

后台启动

```shell
./prometheus --config.file=prometheus.yml  &
```

查看网页
http://xxx.xx.xx.xxx:9090/

查看 targets

## 集成 Grafana

[下载地址](https://grafana.com/grafana/download)

配置文件默认/etc/grafana/grafana.ini

默认 3030 端口

默认用户名密码 admin/admin

接入 promethues 数据

<https://prometheus.io/docs/visualization/grafana/>

1. 添加 prometheus 数据源
2. 设置相关信息
3. 导入想要的 dashboards
   如常用的 4701 6756

## Springboot 整合

```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <!--prometheus-->
    <dependency>
        <groupId>io.micrometer</groupId>
        <artifactId>micrometer-registry-prometheus</artifactId>
        <version>1.0.3</version>
    </dependency>
```

```java
/**
     * 上报application 到 Prometheus
     */
    @Bean
    MeterRegistryCustomizer<MeterRegistry> metricsCommonTags() {
        return registry -> registry.config().commonTags("application", "yourappName");
    }
```

```yaml
management:
  endpoints:
    web:
      exposure:
        include: '*'
  endpoint:
    health:
      show-details: always
    prometheus:
      enabled: true
```

[参考文章1](https://zhuanlan.zhihu.com/p/106036485)
[参考文章2](https://www.twblogs.net/a/5d7f7068bd9eee5327ffee54)
[参考文章3](https://www.hellopz.com/2020/09/18/Prometheus-%E7%9B%91%E6%8E%A7%E6%96%B9%E6%A1%88%E7%AE%80%E8%BF%B0/)
[参考文章4](https://www.cnblogs.com/ealenxie/p/13373385.html)

[P95、P99线的概念](https://www.cnblogs.com/hunternet/p/14354983.html)
