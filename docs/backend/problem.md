# 常遇到的问题

## Mybatis将0识别成null
需要将判断空字符串的逻辑去掉。

## URLEncode将空格转换为+号问题
所以用到URLEncode的时候尽量这么写
```java
URLEncoder.encode(reportExport.getName(), "UTF-8").replaceAll("\\+", "%20");
```

## 各种各样版本问题
1.之前使用2.5.x的springboot时，使用的是主从+哨兵模式的redis方案。
当时当某个哨兵挂掉后，无法从哨兵中获取正确的Redis主节点配置。将springboot升级到2.9.x解决。

