(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{373:function(s,a,t){"use strict";t.r(a);var r=t(14),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"supervisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supervisor"}},[s._v("#")]),s._v(" SuperVisor")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("官网"),a("a",{attrs:{href:"http://supervisord.org/#",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://supervisord.org/#"),a("OutboundLink")],1),s._v(" supervisor是一款不是特别出名的软件,官网也时不时的炸 - -!")]),s._v(" "),a("p",[s._v("安装包下载地址"),a("a",{attrs:{href:"https://pypi.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pypi.org/"),a("OutboundLink")],1),s._v(" 搜索supervisor即可，下载后解压编译")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf supervisor-3.4.0.tar.gz \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" supervisor-3.4.0\npython setup.py "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("或者直接pip安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" supervisor\n// 找到supervisord在哪，可能在/etc/supervisord 也可能在/usr/local/bin\n./supervisord "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /etc/supervisord.conf\n")])])]),a("h2",{attrs:{id:"配置supervisord-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置supervisord-conf"}},[s._v("#")]),s._v(" 配置supervisord.conf")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("inet_http_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" inet "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TCP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" server disabled by default\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9894        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ip_address:port specifier, *:port "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" all iface\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("your username              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" default is no username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("open server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("your password              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" default is no password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("open server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfiles "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" supervisor/*.conf\n")])])]),a("h2",{attrs:{id:"配置项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项目"}},[s._v("#")]),s._v(" 配置项目")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("program:demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enviroment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("JAVA_HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/\ndirectory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /opt/jenkins/demo\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xms1024m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Xmx2048m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:MetaspaceSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("256m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:MaxMetaspaceSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1024m "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+HeapDumpOnOutOfMemoryError")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:HeapDumpPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/jenkins/demo/dump.hprof "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+PrintGC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+PrintGCDetails")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+PrintGCTimeStamps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-XX:+PrintGCDateStamps")]),s._v(" -Xloggc:/opt/jenkins/demo/jvm.log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" /opt/jenkins/demo/demo-1.0.0.jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\nautostart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstartsecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\nautorestart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstartretries "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root\nredirect_stderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstdout_logfile_maxbytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 20MB\nstdout_logfile_backups "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nstdout_logfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /opt/jenkins/demo/stdout.log\n")])])]),a("h2",{attrs:{id:"命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("// 注意 update会重启所有修改过配置文件的程序，所以不要乱动其他文件配置\nsupervisorctl update\n\n// 重启所有程序\nsupervisorctl reload\n")])])]),a("p",[a("a",{attrs:{href:"https://hwilu.github.io/2019/10/23/supervisor%E7%9A%84%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2%E4%B8%8E%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);