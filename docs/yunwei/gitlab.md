# GitLab

## 安装
gitlab稍微有点吃内存，所以至少应在2核4g的机器中操作。
[官网](https://about.gitlab.com/)
[清华大学镜像源](https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/)

安装依赖包
```shell
yum install -y curl policycoreutils-python openssh-server  
```

wget或者上传rpm
```shell
wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-15.10.0-ce.0.el7.x86_64.rpm
```

```shell
rpm -ivh gitlab-ce-15.10.0-ce.0.el7.x86_64.rpm
```

## 配置

修改http端口号
```shell
vim /etc/gitlab/gitlab.rb

external_url= 'http://xxx.xx.xx.xxx:port'
```

可选操作，如机器资源有限，本地还有nginx代理的80则改下内置的nginx端口
```shell
# 如有端口冲突，调整下
unicorn['port'] = 9092
```

prometheus太吃资源，我选择关掉
```shell
nginx['enable'] = true
nginx['listen_port'] = 9898
prometheus_monitoring['enable'] = false
```

重新生成rb外所有配置文件
```
gitlab-ctl reconfigure
```

此文件就是生成的
```shell
/var/opt/gitlab/gitlab-rails/etc/gitlab.yml
```

内置的nginx
```
/var/opt/gitlab/nginx/conf/gitlab-http.conf
```


## 相关操作
```shell
/etc/gitlab/gitlab.rb          #gitlab配置文件
/opt/gitlab                    #gitlab的程序安装目录
/var/opt/gitlab                #gitlab目录数据目录
/var/opt/gitlab/git-data       #存放仓库数据
gitlab-ctl reconfigure         #重新加载配置
gitlab-ctl status              #查看当前gitlab所有服务运行状态
gitlab-ctl stop                #停止gitlab服务
gitlab-ctl stop nginx          #单独停止某个服务
gitlab-ctl tail                #查看所有服务的日志

Gitlab的服务构成：
nginx：                 静态web服务器
gitlab-workhorse        轻量级反向代理服务器
logrotate              日志文件管理工具
postgresql             数据库
redis                  缓存数据库
sidekiq                用于在后台执行队列任务（异步执行）
```

## 常见问题
502错误
```shell
sudo chmod -R o+x /var/opt/gitlab/gitlab-rails
```