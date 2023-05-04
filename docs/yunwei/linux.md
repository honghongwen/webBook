# Linux

## 常用命令

### 磁盘相关

查看磁盘空间
```shell
df -h
```


查看当前目录大小
```shell
du -sh
```

查看指定目录大小
```shell
du -sh 目录名称
```

查看当前文件夹下文件大小，可用来排查磁盘空间，非常实用
```shell
du -h --max-depth=1 *
du -h --max-depth=0 *
```

查看指定文件夹大小，指定深度
```shell
du -h --max-depth=1 software/
```

查看io状态，用来排查是否有io密集型任务，1表示时间间隔；10表示时间，最后的指标%util越高则io负载越高，100%代表满负荷
```shell
iostat -x 1 10
```

定位io来源可以安装[iotop](http://guichaz.free.fr/iotop/)

### 查看日志相关

最常用的实时查看日志
```shell
tail -100f xxx.log
```

搜索查看
```shell
grep -C 5 foo file  # 显示file文件里匹配foo字串那行以及上下5行
grep -B 5 foo file  # 显示foo及前5行
grep -A 5 foo file  # 显示foo及后5行
```

时间节点查看，一定要时间存在于日志中，否则会刷到底部
```shell
sed -n '/2019-10-28 13:15:20/,/2019-10-28 13:15:59/p' xxx.log
```

more命令
```shell
more xxx.log

# 空格键 向下翻页
# 回车 向下翻行
# /字符串 在当前页位置向下查找内容
# :f 立即显示文件名已经目前位置行号
# b或ctrl + b 往回翻页
```

less命令,比more更好用,更推荐这个
```shell
less xxx.log

# pagedown 下翻页
# pageup 上翻页
# /字符串 和more一样
# ?字符串 向上查找字符串
# n重复查找
# N反向重复查找
# g跳转到第一行
# G跳转到最后一行
# q退出
```


### 压缩解压

将目录压缩到html.zip
```shell
zip -q -r html.zip /home/html
zip -q -r html.zip ./dist/
```
将zip文件解压到html目录
```shell
unzip -o -d /usr/local/nginx/html /opt/dist.zip
```
移动文件并以时间结尾
```shell
 mv html.zip ./html-$(date +%Y%m%d-%H%M).zip
```

tar压缩解压

```shell
 // tar压缩
 tar -czvf test.tar.gz test.txt
 // tar解压 x代表解压、v代表显示过程信息、z代表gzip的压缩包、f代表后面紧跟着的是文件不能写成-xfzv、c代表压缩
 tar -xzvf test.tar.gz
 //tar列表
 tar -tzvf test.tar.gz
```

### 软链接
移除软连接
如在/usr/bin目录下，要使node指向新安装的node

```shell
cd /usr/bin
ll node
// 移除软链
rm -rf node

// 新增软链
ln -s /usr/local/bin/node node 
```

### 只保留最近几个任务
```shell
rm -rf `ls -t  |tail -n +11`
```

### 内核版本
```shell
cat /proc/version
hostnamectl
hostnamectl | grep -i kernel
uname -srm
```

## Crontab定时任务
查看当前的定时任务
```shell
crontab -l
```

编辑
```shell
crontab -e
```

删除指定用户|删除指定任务
```
crontab -r <username>
crontab -r | grep xxxx
```

例子,每天下午两点清空mysqld.log
```shell
0 14 * * * cat /dev/null > /var/log/mysqld.log
```

每天两点执行该shell，并将错误输出和正确输出都记录到log文件中
```shell
0 14 * * * /opt/crontab/cleanOnlieWebVersion.sh >> /opt/crontab/cleanOnlieWebVersion.sh.log 2>&1
```

清除历史记录shell，count目录下文件，然后倒序
```shell
#! /bin/sh

cd /opt/jenkins/order/version
fileNum=`ls -l |grep "^-"|wc -l`
echo $fileNum
if [ $fileNum -gt 6 ]
then
        echo "remove some oldest files so can reduce some space."
        rm -rf `ls -t | tail -n +6`
else
        echo "The file numbers are less or equals 5, keep it."
fi
```

统计数量
```shell
wc -l 
```

这个命令的意思是倒序后跳过第一行，total 16644, 同理，+3就是跳过前两行
``` shell
ls -lt | tail -n + 2
```

```
total 16644
-rw-r--r-- 1 root root 2844618 2022-10-24 16:10 html-20221024-1610.zip
-rw-r--r-- 1 root root 2844623 2022-10-21 16:55 html-20221021-1655.zip
-rw-r--r-- 1 root root 2844212 2022-10-18 10:06 html-20221018-1006.zip
-rw-r--r-- 1 root root 2842800 2022-10-17 09:37 html-20221017-0937.zip
-rw-r--r-- 1 root root 2842794 2022-10-17 09:13 html-20221017-0913.zip
-rw-r--r-- 1 root root 2805808 2022-10-17 08:59 html-20221017-0859.zip
```

## 常用脚本