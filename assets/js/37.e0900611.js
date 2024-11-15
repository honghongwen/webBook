(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{364:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[t._v("#")]),t._v(" GitLab")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("gitlab稍微有点吃内存，所以至少应在2核4g的机器中操作。\n"),s("a",{attrs:{href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("清华大学镜像源"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("安装依赖包")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" policycoreutils-python openssh-server  \n")])])]),s("p",[t._v("wget或者上传rpm")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el7/gitlab-ce-15.10.0-ce.0.el7.x86_64.rpm\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-ivh")]),t._v(" gitlab-ce-15.10.0-ce.0.el7.x86_64.rpm\n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("修改http端口号")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/gitlab/gitlab.rb\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("external_url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx.xx.xx.xxx:port'")]),t._v("\n")])])]),s("p",[t._v("可选操作，如机器资源有限，本地还有nginx代理的80则改下内置的nginx端口")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如有端口冲突，调整下")]),t._v("\nunicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'port'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9092")]),t._v("\n")])])]),s("p",[t._v("prometheus太吃资源，我选择关掉")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nnginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'listen_port'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\nprometheus_monitoring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),s("p",[t._v("重新生成rb外所有配置文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("gitlab-ctl reconfigure\n")])])]),s("p",[t._v("此文件就是生成的")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/var/opt/gitlab/gitlab-rails/etc/gitlab.yml\n")])])]),s("p",[t._v("内置的nginx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/var/opt/gitlab/nginx/conf/gitlab-http.conf\n")])])]),s("h2",{attrs:{id:"相关操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关操作"}},[t._v("#")]),t._v(" 相关操作")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("/etc/gitlab/gitlab.rb          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gitlab配置文件")]),t._v("\n/opt/gitlab                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gitlab的程序安装目录")]),t._v("\n/var/opt/gitlab                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gitlab目录数据目录")]),t._v("\n/var/opt/gitlab/git-data       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#存放仓库数据")]),t._v("\ngitlab-ctl reconfigure         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重新加载配置")]),t._v("\ngitlab-ctl status              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前gitlab所有服务运行状态")]),t._v("\ngitlab-ctl stop                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止gitlab服务")]),t._v("\ngitlab-ctl stop nginx          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#单独停止某个服务")]),t._v("\ngitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有服务的日志")]),t._v("\n\nGitlab的服务构成：\nnginx：                 静态web服务器\ngitlab-workhorse        轻量级反向代理服务器\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logrotate")]),t._v("              日志文件管理工具\npostgresql             数据库\nredis                  缓存数据库\nsidekiq                用于在后台执行队列任务（异步执行）\n")])])]),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("p",[t._v("1.502错误")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-R")]),t._v(" o+x /var/opt/gitlab/gitlab-rails\n")])])]),s("p",[t._v("2.内存过大")]),t._v(" "),s("p",[t._v("由于gitlab占用内存较高，如果人员团队较少，不是提供给平台使用而是小组内部使用，可以适当缩小内存，主要通过以下几个方面"),s("br"),t._v("\n修改/etc/gitlab/gitlab.rb")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# unicorn进程数改小，最小2个，内存占用调小")]),t._v("\n\nunicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker_processes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \nunicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker_memory_limit_min'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"300 * 1 << 20"')]),t._v("\nunicorn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'worker_memory_limit_max'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"500 * 1 << 20"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭普罗米修斯及调小postgresql内存")]),t._v("\nsidekiq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'concurrency'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nprometheus_monitoring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\npostgresql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shared_buffers'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 256M\n\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);