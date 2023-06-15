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

## 获取客户端ip的操作
一般的代码都是如下,但是除了下面这串代码，还需要在nginx里进行配置。如果未配置是获取不到客户端的ip的。
```java
public static String getIpAddress(HttpServletRequest request) {
    String ip = null;

    //X-Forwarded-For：Squid 服务代理
    String ipAddresses = request.getHeader("X-Forwarded-For");
    String unknown = "unknown";
    if (ipAddresses == null || ipAddresses.length() == 0 || unknown.equalsIgnoreCase(ipAddresses)) {
        //Proxy-Client-IP：apache 服务代理
        ipAddresses = request.getHeader("Proxy-Client-IP");
    }

    if (ipAddresses == null || ipAddresses.length() == 0 || unknown.equalsIgnoreCase(ipAddresses)) {
        //WL-Proxy-Client-IP：weblogic 服务代理
        ipAddresses = request.getHeader("WL-Proxy-Client-IP");
    }

    if (ipAddresses == null || ipAddresses.length() == 0 || unknown.equalsIgnoreCase(ipAddresses)) {
        //HTTP_CLIENT_IP：有些代理服务器
        ipAddresses = request.getHeader("HTTP_CLIENT_IP");
    }

    if (ipAddresses == null || ipAddresses.length() == 0 || unknown.equalsIgnoreCase(ipAddresses)) {
        //X-Real-IP：nginx服务代理
        ipAddresses = request.getHeader("X-Real-IP");
    }

    //有些网络通过多层代理，那么获取到的ip就会有多个，一般都是通过逗号（,）分割开来，并且第一个ip为客户端的真实IP
    if (ipAddresses != null && ipAddresses.length() != 0) {
        ip = ipAddresses.split(",")[0];
    }

    //还是不能获取到，最后再通过request.getRemoteAddr();获取
    if (ip == null || ip.length() == 0 || unknown.equalsIgnoreCase(ipAddresses)) {
        ip = request.getRemoteAddr();
    }
    return ip;
}
```

nginx.conf的http板块里
```shell
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```