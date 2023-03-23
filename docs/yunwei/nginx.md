# Nginx

## 安装


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