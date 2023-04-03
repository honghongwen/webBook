# Redis

## 安装

从官网下载tar包  <https://redis.io/>

安装

```shell
tar -zxvf ./redis-6.2.6.tar.gz -C /opt/module

cd /home/software
make
make install  ## then go to /usr/local/bin ll
```

配置
```shell
cd /home/software/redis-6.2.6/
vi redis.conf
daemonize yes ## change the redis-server start on background.
requirepass xxxx ## your password
logfile /home/software/redis-6.2.6/log/redis.log
bind 0.0.0.0 ## anyone can connect
```

启动
```shell
redis-server ./redis.conf ## start server

redis-cli -h 127.0.0.1 -p 6379 -a password ## start client

> set foo hello
> get foo
```

## 主从搭建


## 哨兵搭建


## 集群搭建
集群至少需要三主三从，所以至少需要六台机器

创建文件夹
```shell
mkdir -p /usr/local/redis-cluster/5001 5002... 5006
```

将配置文件拷贝到目录中

```shell
cp /opt/module/redis-2.6.2/redis.conf /usr/local/redis-cluster/5001
```

修改配置文件
```shell
pidfile /var/run/redis_5001.pid
daemonize yes
logfile /usr/local/redis-cluster/5001/redis.log
dir /usr/local/redis-cluster/5001
appendonly yes
appendfsync everysec
port 5001

cluster-enabled yes
cluster-config-file nodes-5001.conf
cluster-node-timeout 15000
```

同步几份配置文件到对应文件夹，并且替换5001->500x
用对应配置文件启动redis-server
```shell
redis-server /usr/local/redis-cluster/500x/redis.conf
```

使用集群搭建命令搭建集群 5.0之前使用ruby命令，5.0之后可以使用自带的命令
```shell
redis-cli --cluster create ip:port ip2:port2... --cluster-replicas n

redis-cli --cluster create 
172.16.151.100:5001
172.16.151.100:5002 
172.16.151.100:5003 
172.16.151.100:5004 
172.16.151.100:5005 
172.16.151.100:5006 --cluster-replicas 1 -a password
```

```shell
redis-cli --cluster help # 查看帮助
```

16384个slots将会平分在几个主节点上
集群模式登陆redis
```shell
redis-cli --cluster -c --pass password -p 5001
```

!注意如果是虚拟机，磁盘是否够空间。

增加从节点
分片

> 保障 Redis 高可用的 4 种手段：

> 数据持久化保证了数据不丢失；

> Redis 主从让 Redis 从单机变成了多机。
> 它有两种模式：主从模式和从从模式，但当主节点出现问题时，需要人工手动恢复系统；

> Redis 哨兵模式用来监控 Redis 主从模式，并提供了自动容灾恢复的功能。

> 最后是 Redis 集群，除了可以提供主从和哨兵的功能之外，
> 还提供了多个主从节点的集群功能，这样就可以把数据均匀的存储各个主机主节点上，
> 实现了系统的横向扩展，大大提高了 Redis 的并发处理能力

## 常用命令
启动服务
redis-server redis.conf ## 一般在安装目录

连接
redis-cli -h host -p port -a password

查看慢查询

清空数据库
flushall
flushdb

停止服务
shutdown


## 数据结构

### 基本的五个
* string
* list
* hash
* set
* sorted set

### 复杂的
* SDS

不同于c语言的字符串，redis定义了SDS构造体，因为c语言中要拿到字符串的长度，必须重头遍历这个字符串，直到末尾\0。所以这个结构直接访问len就可以知道字符串长度，更节省了时间。
杜绝了缓冲区溢出，c语言需要提前设置内存，如果将a字符串拼接，但是忘记重新设置长度，那它就会溢出到下个字符串的位置。设计了拼接api，会先检查长度，如果不够就先扩展。
预分配空间
减少了修改字符串长度频繁的分配空间操作，c语言需要这样的操作，但是SDS有空间预分配的操作。规则如下：
1.如果分配后，SDS的长度将小于1m，那就会再设置和len想同长度的free字节。
2.如果大于1m，那就加1m。
 
惰性释放
字符串缩短时，不立马释放free空间，而是留着等以后，便于后续字符串又变长。
当然也有对应api去释放这部分空间，不用担心内存浪费。

```c
struct sdshdr {
 // 已使用字节数量 5
 int len;
 // 未使用字节数量 0
 int free;
 // 用于保存字符串 \0结尾 'R' 'e' 'd' 'i' 's' '\0'
 char[] buf;
}
```

## 持久化
* RDB
可以通过SAVE命令或者BGSAVE命令（另起线程）保存dump.rdb文件
文件保存的都是二进制的键值
或者通过修改redis.conf文件

```shell
save 600 1  ## 代表600秒内执行过一次命令
```

* AOF


## 其他