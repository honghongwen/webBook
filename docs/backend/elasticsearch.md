# Elasticsearch

## 安装
目前ES已经到了8.7.0的版本，我这边选了个6.8.20的版本使用,同时es也依赖jdk环境。这里不做赘述。
[下载地址](https://www.elastic.co/downloads/past-releases#elasticsearch)

直接复制对应版本链接选中wget就好
```shell
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.8.20.tar.gz

tar -xzvf elasticsearch-6.8.20.tar.gz
```

## 配置

简单修改下集群名称和节点名称，使用单机使用下
```shell
vim config/elasticsearch.yml
```

```shell
// 去掉行开头的 # 并重命名集群名，这里命名为 compass
cluster.name: mycluster
// 去掉行开头的 # 并重命名节点名，这里命名为 node-1
node.name: node001
```

## 启动
进入bin目录后台启动,可先按下面问题进行配置后再启动
```shell
./elasticsearch -d
```
启动后curl localhost:9200能正常返回json就ok
![es](./image/es1.png)

### 新建用户

这里启动有个问题(5版本之后)，不能使用root用户启动。日志可以在logs下mycluster.log看到，所以先建个用户
```shell
adduser fengwen
passwd fengwen

# 输入确认密码后
chown -R fengwen elasticsearch-6.8.20

su fengwen
```

### 修改ip
调整只能本地访问问题，修改yml配置后重新启动
```shell
vim config/elasticsearch.yml

# 修改network.host
network.host: 0.0.0.0
```

### 文件数过小
查看日志发现还是无法启动，分别为每个进程同时打开的文件数太小、最大线程个数太低、一个进程最多的内存区域太小
![es](./image/es2.png)

```shell
# 1.最大线程数和文件数，修改limits.conf配置，用户退出后重新登录生效
vim /etc/security/limits.conf

# 文件数
* soft nofile 65535
* hard nofile 65535

# 最大线程数
* soft nproc 4096
* hard nproc 4096

# 2.最多的内存区域大小,修改sysctl.conf配置，sysctl -p后生效
vim /etc/sysctl.conf
# 增加如下配置
vm.max_map_count=262144

# 使生效
sysctl -p
```

## Kibana安装

还有一种GUI是使用elasticsearch-head，这种基于你的本地node环境run启动。
[kibana官网](https://www.elastic.co/downloads/kibana)


## 数据同步

在大多数情况下，我们使用的是RDBMS。但是随着业务的增长，为了适应各种各样的运营需求，如各类报表，各类业务指标等。不得不做出去规范化的操作。
一般的操作如下：

* 列级处理

::: tip
冗余字段
:::

在我还是一个刚工作不久在一家体量不是很大的公司工作的时候，为了满足老板有时候奇奇怪怪的需求，不得不去破坏标标致致的表结构，比如在什么订单表上去存储一个奇奇怪怪的字段。这种操作让自己很难受同时也很难像别人解释，到最后大家不得不去每次别捏的看到这个字段在一个设计的很不错的数据表上。

* 表级处理

::: tip
构建宽表，同步写入
:::
这种操作也不是没有，但是我从来没这么干过 - -！，大概的意思是昨晚业务操作后，再塞一个DO到宽表中，方便后续运营数据的查询。

::: tip
RDBMS物化视图
:::
视图的方式我目前这家公司就有很多，由于很多业务系统年代久远且数据库用的Oracle(总监07年过来的，已经快50岁了),据说2000年左右这种方式非常普遍。

::: tip
数据迁移 -> ES、OLAP等
:::
这种就是借助一些大数据工具或者一些开源的数据同步工具等，对数据进行迁移到ES或者Hive等数据库中，同时方案也是各种各样，工具也是非常多。如阿里云和腾讯的DTS、AWS的DMS、大数据的Sqoop、Datax以及Oracle也有GoldenGate、开源的canal等等


当然回归到数据同步到ES，这里可选的一些方案

* 双写

不知道大家有无做过需要双写的系统，代码十分累赘，尤其是老系统的改造对改代码的人来说非常痛苦。

* MQ

这种其实和双写差不多，不过中间加了层MQ，双写的同时还加入了MQ组件，复杂度更高了。

* Datax
完全不用对业务代码进行改造，缺点是他只能做全量同步，如果时效性不高，可以考虑。或者和其他混合使用。

* Canal
也不用改造业务代码，且是实时同步的方式。