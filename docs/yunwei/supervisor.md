# SuperVisor

## 安装
官网<http://supervisord.org/#> supervisor是一款不是特别出名的软件,官网也时不时的炸 - -!

安装包下载地址<https://pypi.org/> 搜索supervisor即可，下载后解压编译

```shell
tar zxf supervisor-3.4.0.tar.gz 
cd supervisor-3.4.0
python setup.py install
```

或者直接pip安装
```shell
pip install supervisor
// 找到supervisord在哪，可能在/etc/supervisord 也可能在/usr/local/bin
./supervisord -c /etc/supervisord.conf
```

## 配置supervisord.conf
```shell
[inet_http_server]         ; inet (TCP) server disabled by default
port=0.0.0.0:9894        ; ip_address:port specifier, *:port for all iface
username=your username              ; default is no username (open server)
password=your password              ; default is no password (open server)

...

[include]
files = supervisor/*.conf
```

## 配置项目
```shell
[program:demo]
enviroment=JAVA_HOME=/
directory = /opt/jenkins/demo
command = nohup java -Xms1024m -Xmx2048m -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=1024m -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/opt/jenkins/demo/dump.hprof -XX:+PrintGC -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:/opt/jenkins/demo/jvm.log -jar /opt/jenkins/demo/demo-1.0.0.jar &
autostart = true
startsecs = 30
autorestart = true
startretries = 3
user = root
redirect_stderr = true
stdout_logfile_maxbytes = 20MB
stdout_logfile_backups = 20
stdout_logfile = /opt/jenkins/demo/stdout.log
```

## 命令

```shell
// 注意 update会重启所有修改过配置文件的程序，所以不要乱动其他文件配置
supervisorctl update

// 重启所有程序
supervisorctl reload
```

[参考文章](https://hwilu.github.io/2019/10/23/supervisor%E7%9A%84%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2%E4%B8%8E%E4%BD%BF%E7%94%A8/)