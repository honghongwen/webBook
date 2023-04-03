# Arthas

你是否遇到过这种情况，每次运维帮你项目部署后，你发现线上代码还是老版本。然后陷入扯皮之中。
artahs这款工具，能让你直接在线上查看运行中的代码，以后在扯皮就直接把代码截图到群里
然后发个/:8*符号。（会不会被打死另说）

## 热修复

1. 反编译代码（ats）
```shell
jad --source-only 
com.example.demo.arthas.user.UserController > /tmp/UserController.java
```

2. 编辑代码
```shell
vim /tmp/UserController.java
```

3. sc查找classloader（ats）
```shell
sc -d *UserController | grep classLoaderHash
```

4. mc编译
```shell
mc -c 1be6f5c3 /tmp/UserController.java -d /tmp

------或者

mc --classLoaderClass 
org.springframework.boot.loader.LaunchedURLClassLoader 
/tmp/UserController.java -d /tmp
```

5. retransform加载
```shell
retransform /tmp/com/example/demo/arthas/user/UserController.class
```


## 查看线上运行代码

