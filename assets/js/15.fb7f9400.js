(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(a,s,t){a.exports=t.p+"assets/img/kbn1.380bbe96.png"},285:function(a,s,t){a.exports=t.p+"assets/img/kbn2.1e2452f1.png"},346:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"elk-filebeat的搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elk-filebeat的搭建"}},[a._v("#")]),a._v(" ELK+Filebeat的搭建")]),a._v(" "),s("p",[a._v("elastic是一个大生态，elasticsearch是其内部最重要的一个组件。官网推荐的elk+Beats收集各种日志方案看着很不错。\n流程是 客户机上安装filebeat收集应用日志(filebeat是一个go写的很轻量的应用，对比logstash或者flume来讲太友好了，不会吃掉太多资源，而且他能自动降低高峰下的自身速率)，然后发给logstash做过滤和处理（这里如果logstash处理力有限可以加机器或者考虑用kafka）\n然后logstash再output到es内。 最终kibana上做一个结果展示")]),a._v(" "),s("h2",{attrs:{id:"_1-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-elasticsearch"}},[a._v("#")]),a._v(" 1.Elasticsearch")]),a._v(" "),s("p",[a._v("目前最新的是8.8版本，花费了大量时间查看了es官网的文档，大概对其一些特性有了个了解，比如7之后把6版本的分片数量由5减小了，具体怎么个改法的我还是有点没弄懂 - -！ 配置项真的很多 "),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.8/misc-cluster-settings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("链接"),s("OutboundLink")],1),a._v(" 不过也有在索引文档里看到有些说分片默认是为1"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.8/index-modules.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("链接"),s("OutboundLink")],1),a._v("，内置了个jdk，支持了跨集群复制等，8之后加了个安全证书等等。")]),a._v(" "),s("h3",{attrs:{id:"_1-1安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1安装"}},[a._v("#")]),a._v(" 1.1安装")]),a._v(" "),s("p",[a._v("根据官网的安装步骤下载安装es")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.8.0-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.8.0-linux-x86_64.tar.gz.sha512\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这个shasum没有的话 yum install perl-Digest-SHA -y")]),a._v("\nshasum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("512")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" elasticsearch-8.8.0-linux-x86_64.tar.gz.sha512 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzf")]),a._v(" elasticsearch-8.8.0-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" elasticsearch-8.8.0/ \n")])])]),s("p",[a._v("官网补充 验证成功后会输出下面语句  且会自动把路径加到了ES_HOME的环境变量中了")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Compares the SHA of the downloaded .tar.gz archive and the published checksum, which should output elasticsearch-{version}-linux-x86_64.tar.gz: OK.\n\nThis directory is known as $ES_HOME.\n")])])]),s("h3",{attrs:{id:"_2-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动"}},[a._v("#")]),a._v(" 2.启动")]),a._v(" "),s("p",[a._v("因为不能使用root用户启动es，所以提前建好用户，给好文件权限。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupadd")]),a._v(" elastic\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" elastic elastic\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" elastic:elastic /usr/local/elasticsearch-8.8.0\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为了方便建软链接")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-sv")]),a._v(" /usr/local/elasticsearch-8.8.0 /app/elasticsearch\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" elastic:elastic /app/elasticsearch\n")])])]),s("p",[a._v("建好用户后，切换到elastic用户下，启动es，启动之前最好改下config/elasticsearch.yml，具体可见"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.8/settings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方配置说明"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 集群名称")]),a._v("\ncluster.name: logging-test\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 节点名称")]),a._v("\nnode.name: loggin-test-node01\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# data目录，默认$ES_HOME/data")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# logs目录，默认$ES_HOME/logs")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 集群引导配置，只需要首次启动集群时需要。集群形成后从每个节点删除此配置。不然之后的错误配置可能会引导出一个新集群。可以根据集群uuid判断。")]),a._v("\ncluster.initial_master_nodes: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"loggin-test-node01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 有主节点资格的节点地址，不过如果是单节点的话不用配这个，不然一直会刷warn警告。")]),a._v("\ndiscovery.seed_hosts:\n    - "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.10:9300\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果其他节点要接入集群 需要走的ip，配置了这个值后，es会默认认为你是在配生成环境，会升级配置检查")]),a._v("\nnetwork.host: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.10\n")])])]),s("p",[a._v("同时如果内存吃不消可以改下config下其他配置，在jvm.options里，不过我32G的内存就不用动了。默认就好(默认会吃掉我一半内存- -！)\n同时，由于我这台机器资源比较充足，如果小的机器可能要配置下最大线程数等问题，我之前在虚拟机上装6.x的es时会有那个问题。具体也可看官网系统配置"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/8.8/setting-system-settings.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("系统配置"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# 1.最大线程数和文件数，修改limits.conf配置，用户退出后重新登录生效\nvim /etc/security/limits.conf\n\n# 文件数\n* soft nofile 65535\n* hard nofile 65535\n\n# 最大线程数\n* soft nproc 4096\n* hard nproc 4096\n\n# 2.最多的内存区域大小,修改sysctl.conf配置，sysctl -p后生效\nvim /etc/sysctl.conf\n# 增加如下配置\nvm.max_map_count=262144\n\n# 使生效\nsysctl -p\n")])])]),s("p",[a._v("8版本的es首次启动时会给你打印出一些安全功能的日志，最好记录下来，免得后面找不到，那个sha256的TLS证书指纹后面beats要用到。")]),a._v(" "),s("p",[a._v("1.elastic超级用户的密码。\n2.30分钟内有效的kibana token\n3.生成传输层和http层要用的TLS证书和密钥，并打印出sha-256后的指纹证书")]),a._v(" "),s("p",[a._v("首次直接交互式启动，方便排查错误跟记录密钥，同时首次启动后es会在config/elasticsearch.yml最后拼上x-pack相关的安全配置")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" elastic\n./bin/elasticsearch \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 记录密钥后杀掉es进程重新后台启动。当前目录下记录pid，之后停止es直接pkill -F pid")]),a._v("\n./bin/elasticsearch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" elasticsearch.pid\n./bin/elasticsearch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看帮助")]),a._v("\n")])])]),s("p",[a._v("同时这个版本会打印出一些slf4j相关的如no provider的warn级别日志，我看issues已经有人提出来了，他们也说会在下个版本修复。")]),a._v(" "),s("p",[a._v("验证es启动正常，可以查看9200端口或者执行下面命令\n前面说了8.0之后加了TLS证书，所以必须使用https，同时ES_HOME这个环境变量如果你是root用户解压的压缩包，可能在es用户下无法找到环境变量，直接切回root或者最好自己配下/etc/profile，不然谁知道他什么时候又用到这个变量。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cacert")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES_HOME")]),a._v("/config/certs/http_ca.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" elastic https://localhost:9200 \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输入上面命令后，会要求你输入超级用户elastic的密码，直接将之前记录的elastic用户密码考进去。能正常返回json的节点信息就ok")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-curd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-curd"}},[a._v("#")]),a._v(" 3.curd")]),a._v(" "),s("p",[a._v("curl直接新增数据，可以直接去掉[]用 user:password输入密码")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cacert")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ES_HOME")]),a._v("/config/certs/http_ca.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" elastic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(":password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://localhost:9200/customer/_doc/1?pretty"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Content-Type: application/json'")]),a._v(" -d"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\' {   "firstname": "Jennifer",   "lastname": "Walters" } \'')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cacert")]),a._v(" ./http_ca.crt "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" elastic:password "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" GET "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://localhost:9200/customer/_doc/1?pretty"')]),a._v("\n\n\n")])])]),s("h2",{attrs:{id:"_2-kibana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-kibana"}},[a._v("#")]),a._v(" 2.Kibana")]),a._v(" "),s("p",[a._v("kibana也是一个重量级的应用，压缩文件都有264M，他不再仅仅是一个es的可视化工具了。具体可看"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/8.8/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1),a._v("，说实话，如果只是为了可视化es数据，kibana有点过于重量级了，他是整个Elastic Stack生态的管理工具。但他还和一些云厂商的日志平台一样，提供如KQL等功能帮助快速搜索日志，还有丰富的仪表盘等功能等。")]),a._v(" "),s("h3",{attrs:{id:"_2-1安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1安装"}},[a._v("#")]),a._v(" 2.1安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" https://artifacts.elastic.co/downloads/kibana/kibana-8.8.1-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://artifacts.elastic.co/downloads/kibana/kibana-8.8.1-linux-x86_64.tar.gz.sha512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" shasum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("512")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" - \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzf")]),a._v(" kibana-8.8.1-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" kibana-8.8.1/ \n")])])]),s("p",[a._v("因为要用到用户连接elasticsearch，所以最好先去elasticsearch下重置下内置用户kibana_system的密码")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("elasticsearch-reset-password "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" kibana_system\n")])])]),s("h3",{attrs:{id:"_2-2配置-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2配置-启动"}},[a._v("#")]),a._v(" 2.2配置&启动")]),a._v(" "),s("p",[a._v("修改了下配置 config/kibana.yml  kibana的配置同样不算少，具体可以跟着官网走，但是重要的如下。我的配置项")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("server.port: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5601")]),a._v("\nserver.host: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.0.0"')]),a._v("\nelasticsearch.hosts: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://localhost:9200"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nelasticsearch.username: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"kibana_system"')]),a._v("\nelasticsearch.password: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xxxx"')]),a._v("\nelasticsearch.pingTimeout: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1500")]),a._v("\nelasticsearch.requestTimeout: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v("\nelasticsearch.maxSockets: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v("\nelasticsearch.compression: "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\nelasticsearch.shardTimeout: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v("\nelasticsearch.ssl.verificationMode: none\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" ./bin/kibana "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),s("p",[a._v("第一次启动后去页面访问可能要你输入kibana的token，这个是之前启动elasticsearch打印出来的。如果过了半个小时则可以重新生成")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("bin/elasticsearch-create-enrollment-token "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" kibana\n")])])]),s("h3",{attrs:{id:"_2-3创建视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3创建视图"}},[a._v("#")]),a._v(" 2.3创建视图")]),a._v(" "),s("p",[a._v("启动后，进入discovery之后，就可以创建视图了，不过要先有数据，一个视图对应到一个或多个索引或数据流。\n保存时还可以作为临时视图，这样别人就看不见你创建的视图了。关于Discover页面的用法，相信之前用过阿里的日志平台的可太熟悉了。\n"),s("img",{attrs:{src:t(284),alt:"kbn1"}}),a._v(" "),s("img",{attrs:{src:t(285),alt:"kbn2"}})]),a._v(" "),s("h3",{attrs:{id:"_2-4官网示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4官网示例"}},[a._v("#")]),a._v(" 2.4官网示例")]),a._v(" "),s("p",[a._v("启动kibana后，官网有个示例数据的例子，可以跟着熟悉下kibana用法\n"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/8.8/get-started.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("kibana示例数据"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_2-5开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5开发工具"}},[a._v("#")]),a._v(" 2.5开发工具")]),a._v(" "),s("p",[a._v("kibana自带了很好用的开发工具，后续我们用到logstash去做过滤的时候匹配自己的日志格式要用到grok表达式、以及查询分析es索引的时候，有网页版的console。非常好用。"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/kibana/8.8/xpack-grokdebugger.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("开发工具地址"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"_2-6用户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6用户管理"}},[a._v("#")]),a._v(" 2.6用户管理")]),a._v(" "),s("p",[a._v("和其他国外的软件很像，如confluence或者jenkins等，kibana有一套自己的页面权限。 如我不需要给普通用户太多复杂的功能，直接创建一个新的空间，只需要仪表盘和Discover跟Stack Management的功能。新空间和默认的空间是隔离开的，数据视图也是隔离开的。所以更像是给不同部门或组开新空间。")]),a._v(" "),s("p",[a._v("然后添加新的角色，给角色分配空间，然后选择可以操作的索引。以及kibana页面权限。 比如给某个空间的管理员放开Stack Managerment的权限。而普通用户只需要Discover和Dashboard的权限。")]),a._v(" "),s("p",[a._v("添加用户，分配对应角色。")]),a._v(" "),s("p",[a._v("建完空间、角色、用户后，整个kibana的配置就ok了。")]),a._v(" "),s("h2",{attrs:{id:"_3-filebeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-filebeat"}},[a._v("#")]),a._v(" 3.Filebeat")]),a._v(" "),s("p",[a._v("新版本的logstash推荐你使用filebeat去收集web日志。")]),a._v(" "),s("h3",{attrs:{id:"_2-1安装-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1安装-2"}},[a._v("#")]),a._v(" 2.1安装")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-8.8.1-linux-x86_64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xzvf filebeat-8.8.1-linux-x86_64.tar.gz\n")])])]),s("h2",{attrs:{id:"_2-logstash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-logstash"}},[a._v("#")]),a._v(" 2.Logstash")]),a._v(" "),s("p",[a._v("起初认为logstash也是个轻量的进程，下完压缩包后发现300多m，其还和es一样，还内置了个17版本jdk.")]),a._v(" "),s("p",[a._v("关于Logstash"),s("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/current/first-event.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);