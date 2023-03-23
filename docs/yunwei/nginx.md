# Nginx

## 安装
Nginx的官网比较杂，官网安装介绍如下<https://nginx.org/en/docs/install.html>
下载地址如下<https://nginx.org/en/download.html>
或者直接wget安装解压
```shell
wget http://nginx.org/download/nginx-1.6.2.tar.gz

tar zxvf nginx-1.6.2.tar.gz
```

## 常用conf

nginx.conf
```shell
# user  nginx;
worker_processes  auto;

error_log  /usr/local/nginx/logs/error.log notice;
pid        /usr/local/nginx/nginx.pid;


events {
    worker_connections  2048;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /usr/local/nginx/logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    gzip  on;

    include /usr/local/nginx/conf/conf.d/*.conf;
}
```

具体应用conf
```
upstream api {
 server xx.xxx.xx.xxx:9891;
 #server xx.xxx.xx.xxx:9891;
}
server {
        listen  9897 ;
        server_name localhost;

        location / {
                root /usr/local/nginx/html;
                index index.html;
        }
        location /api/ {
                proxy_pass http://api/;
        }
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
                root html;
        }
}
```


## 命令

重启
```shell
nginx -s reload
```


## 常见问题

pid误删

```shell
ps -ef | grep nginx

// 找到master progress

echo 74874 > nginx.pid
```

## nginx+lvs 双机主备

### 安装keepalived
```shell
// 官网
https://www.keepalived.org/download.html

// 版本
Keepalived for Linux - Version 2.0.18 - July 26, 2019 - MD5SUM:={9d1dc77a0e4c628daf9fe453701b54be}

// 上传到/home/software
scp keepalived-2.0.18.tar.gz root@xx.xxx.xx.xxx:/home/software

// 解压
tar -zxvf keepalived-2.0.18.tar.gz

// 配置
./configure --prefix=/usr/local/keepalived --sysconf=/etc

// make
make && make install

// 查看
whereis keepalived

// 位置
/etc/keepalived   /usr/local/keepalived
```

### keepalived.conf master配置

```shell
! Configuration File for keepalived

global_defs {
   # 路由id，主键
   router_id keep_105
}

# 计算机节点
vrrp_instance VI_1 {
    # 表示当前105为主节点
    state MASTER
    # 当前示例绑定的网卡
    interface eth0
    # 保证主备节点一致
    virtual_router_id 51
    # 优先级,权重
    priority 100
    # 主备间同步检查的时间间隔
    advert_int 1
    # 认证授权密,防止非法节点的进入
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 虚拟IP
    virtual_ipaddress {
        192.168.1.161
    }
}
```

### keepalived.conf

```shell
! Configuration File for keepalived

global_defs {
   # 路由id，主键
   router_id keep_156
}

# 计算机节点
vrrp_instance VI_1 {
    # 表示当前105为主节点
    state BACKUP
    # 当前示例绑定的网卡
    interface eth0
    # 保证主备节点一致
    virtual_router_id 51
    # 优先级,权重
    priority 80
    # 主备间同步检查的时间间隔
    advert_int 1
    # 认证授权密,防止非法节点的进入
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 虚拟IP
    virtual_ipaddress {
        192.168.1.161
    }
}
```

### 命令

```shell
// 启动
/usr/local/keepalived/sbin/keepalived

// 查看是否启动,查看eth0网卡是否多了ip
ip addr

// 或者curl访问接口
curl -H eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNjY1MzY4MDMwMDM2LCJleHAiOjE2NjU5NzI4MzAsInVzZXJpZCI6IjIyMDc3ODE2MDkifQ.b6qptFFPkH8eIPgvEacPIjXNs6dNYx8d8Jw5bWM_r9JLGjJp3ywjcrwD1RuoF6w012v4brMb-GNu5egLlzkhBg -X GET http://192.168.1.161:9891/system/timestamp -i

// 或者查看启动日志
journalctl -u keepalived.service

// 结束
ps -ef | grep keepalived

kill -9 那个pid后面跟1的进程


```

### 注册到服务
```shell
// 作为服务注册到linux
cd /home/software/keepalived-2.0.18/keepalived/etc/init.d
cp keepalived /etc/init.d
cd /home/software/keepalived-2.0.18/keepalived/etc/sysconfig
cp keepalived /etc/sysconfig

// 刷新
systemctl daemon-reload

// 启动 关闭
systemctl start keepalived.service
systemctl stop keepalived.service

// 注意关闭后可能虚拟ip去到了从节点，导致当台机器无法查看

```

### 自动重启

```shell
! Configuration File for keepalived

global_defs {
   # 路由id，主键
   router_id keep_105
}

vrrp_script check_nginx_alive {
   script "/etc/keepalived/check_and_restart_nginx.sh"
   interval 2 #每隔两秒执行一次脚本
   weight 10 # 如果脚本运行失败，则升级权重+10
}

# 计算机节点
vrrp_instance VI_1 {
    # 表示当前105为主节点
    state MASTER
    # 当前示例绑定的网卡
    interface eth0
    # 保证主备节点一致
    virtual_router_id 51
    # 优先级,权重
    priority 100
    # 主备间同步检查的时间间隔
    advert_int 1
    # 认证授权密,防止非法节点的进入
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    track_script {
        check_nginx_alive
    }
    # 虚拟IP
    virtual_ipaddress {
        192.168.1.161
    }
}
```

check_and_restart_nginx.sh
```shell
#!/bin/bash

# 变量lineCount记录nginx的进程数目
LineCount=`ps -C nginx --no-header | wc -l`
if [ $LineCount -eq 0 ];then
        nginx -c /etc/nginx/nginx.conf
        sleep 3
        if [ `ps -C nginx --no-header | wc -l` -eq 0 ];then
        killall keepalived
        fi
fi
```