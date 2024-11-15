(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{371:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h3",{attrs:{id:"磁盘相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘相关"}},[a._v("#")]),a._v(" 磁盘相关")]),a._v(" "),s("p",[a._v("查看磁盘空间")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("df")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("\n")])])]),s("p",[a._v("查看当前目录大小")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sh")]),a._v("\n")])])]),s("p",[a._v("查看指定目录大小")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sh")]),a._v(" 目录名称\n")])])]),s("p",[a._v("查看当前文件夹下文件大小，可用来排查磁盘空间，非常实用")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" --max-depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" *\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" --max-depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" *\n")])])]),s("p",[a._v("查看指定文件夹大小，指定深度")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" --max-depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" software/\n")])])]),s("p",[a._v("查看io状态，用来排查是否有io密集型任务，1表示时间间隔；10表示时间，最后的指标%util越高则io负载越高，100%代表满负荷")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("iostat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-x")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("p",[a._v("定位io来源可以安装"),s("a",{attrs:{href:"http://guichaz.free.fr/iotop/",target:"_blank",rel:"noopener noreferrer"}},[a._v("iotop"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"cpu相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpu相关"}},[a._v("#")]),a._v(" CPU相关")]),a._v(" "),s("p",[a._v("简单的如top等就不说了，一些不常用的记一下\n监控每个CPU情况，每隔2s 统计3次")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mpstat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" ALL "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n")])])]),s("p",[a._v("每个1s输出全部进程的cpu、内存等信息")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pid "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("stat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 也可以查看具体进程")]),a._v("\npidstat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("95237")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("h3",{attrs:{id:"查看日志相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志相关"}},[a._v("#")]),a._v(" 查看日志相关")]),a._v(" "),s("p",[a._v("最常用的实时查看日志")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-100f")]),a._v(" xxx.log\n")])])]),s("p",[a._v("搜索查看")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" foo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示file文件里匹配foo字串那行以及上下5行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-B")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" foo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示foo及前5行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" foo "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示foo及后5行")]),a._v("\n")])])]),s("p",[a._v("时间节点查看，一定要时间存在于日志中，否则会刷到底部")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/2019-10-28 13:15:20/,/2019-10-28 13:15:59/p'")]),a._v(" xxx.log\n")])])]),s("p",[a._v("more命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" xxx.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 空格键 向下翻页")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 回车 向下翻行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /字符串 在当前页位置向下查找内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# :f 立即显示文件名已经目前位置行号")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# b或ctrl + b 往回翻页")]),a._v("\n")])])]),s("p",[a._v("less命令,比more更好用,更推荐这个")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("less")]),a._v(" xxx.log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pagedown 下翻页")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pageup 上翻页")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /字符串 和more一样")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ?字符串 向上查找字符串")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# n重复查找")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# N反向重复查找")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# g跳转到第一行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# G跳转到最后一行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# q退出")]),a._v("\n")])])]),s("h3",{attrs:{id:"压缩解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩解压"}},[a._v("#")]),a._v(" 压缩解压")]),a._v(" "),s("p",[a._v("将目录压缩到html.zip")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" html.zip /home/html\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" html.zip ./dist/\n")])])]),s("p",[a._v("将zip文件解压到html目录")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /usr/local/nginx/html /opt/dist.zip\n")])])]),s("p",[a._v("移动文件并以时间结尾")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" html.zip ./html-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("date")]),a._v(" +%Y%m%d-%H%M"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(".zip\n")])])]),s("p",[a._v("tar压缩解压")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v(" // tar压缩\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czvf")]),a._v(" test.tar.gz test.txt\n // tar解压 x代表解压、v代表显示过程信息、z代表gzip的压缩包、f代表后面紧跟着的是文件不能写成-xfzv、c代表压缩\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" test.tar.gz\n //tar列表\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tzvf")]),a._v(" test.tar.gz\n")])])]),s("h3",{attrs:{id:"软链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软链接"}},[a._v("#")]),a._v(" 软链接")]),a._v(" "),s("p",[a._v("移除软连接\n如在/usr/bin目录下，要使node指向新安装的node")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/bin\nll "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n// 移除软链\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v("\n\n// 新增软链\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /usr/local/bin/node "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" \n")])])]),s("h3",{attrs:{id:"只保留最近几个任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只保留最近几个任务"}},[a._v("#")]),a._v(" 只保留最近几个任务")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" +11"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n")])])]),s("h3",{attrs:{id:"内核版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核版本"}},[a._v("#")]),a._v(" 内核版本")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /proc/version\nhostnamectl\nhostnamectl "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" kernel\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-srm")]),a._v("\n")])])]),s("h2",{attrs:{id:"crontab定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crontab定时任务"}},[a._v("#")]),a._v(" Crontab定时任务")]),a._v(" "),s("p",[a._v("查看当前的定时任务")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v("\n")])])]),s("p",[a._v("编辑")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("crontab")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v("\n")])])]),s("p",[a._v("删除指定用户|删除指定任务")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("crontab -r <username>\ncrontab -r | grep xxxx\n")])])]),s("p",[a._v("例子,每天下午两点清空mysqld.log")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" * * * "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /var/log/mysqld.log\n")])])]),s("p",[a._v("每天两点执行该shell，并将错误输出和正确输出都记录到log文件中")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v(" * * * /opt/crontab/cleanOnlieWebVersion.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /opt/crontab/cleanOnlieWebVersion.sh.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v("\n")])])]),s("p",[a._v("清除历史记录shell，count目录下文件，然后倒序")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#! /bin/sh")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/jenkins/order/version\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("fileNum")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^-"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$fileNum")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$fileNum")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-gt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"remove some oldest files so can reduce some space."')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" +6"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The file numbers are less or equals 5, keep it."')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n")])])]),s("p",[a._v("统计数量")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" \n")])])]),s("p",[a._v("这个命令的意思是倒序后跳过第一行，total 16644, 同理，+3就是跳过前两行")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-lt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" + "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("total 16644\n-rw-r--r-- 1 root root 2844618 2022-10-24 16:10 html-20221024-1610.zip\n-rw-r--r-- 1 root root 2844623 2022-10-21 16:55 html-20221021-1655.zip\n-rw-r--r-- 1 root root 2844212 2022-10-18 10:06 html-20221018-1006.zip\n-rw-r--r-- 1 root root 2842800 2022-10-17 09:37 html-20221017-0937.zip\n-rw-r--r-- 1 root root 2842794 2022-10-17 09:13 html-20221017-0913.zip\n-rw-r--r-- 1 root root 2805808 2022-10-17 08:59 html-20221017-0859.zip\n")])])]),s("h2",{attrs:{id:"windows文件字符转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows文件字符转换"}},[a._v("#")]),a._v(" windows文件字符转换")]),a._v(" "),s("p",[a._v("有时将windows文件拷至linux，需要替换下字符")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装小工具dos2unix")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" dos2unix\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进行转换")]),a._v("\ndos2unix ./filename\n")])])]),s("h2",{attrs:{id:"查看所有用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有用户"}},[a._v("#")]),a._v(" 查看所有用户")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/passwd "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cut")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);