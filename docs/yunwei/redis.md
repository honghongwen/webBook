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

## 常用命令

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