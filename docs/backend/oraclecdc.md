# Oracle CDC调研比较

变更数据捕获。CDC(Change Data Capture)，广义概念上，只要是能捕获数据变更的技术，我们都可以称为CDC

基于oracle的CDC肯定是基于redo log实现
[大致介绍](https://tapdata.net/real-time-data-process-engine-4.html)

方案比较

| 名称              | 问题    |     备注    |
| ----------------- | ----------------------------------- |--------|
| OGG              | Oracle Golden Gate,过于复杂  |   一篇ogg到kafka的文章https://gjtmaster.com/2018/09/13/%E5%88%A9%E7%94%A8ogg%E5%AE%9E%E7%8E%B0oracle%E5%88%B0kafka%E7%9A%84%E5%A2%9E%E9%87%8F%E6%95%B0%E6%8D%AE%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5/       |
| Logminer               | 解析速度低，资源消耗每个进程不能超过1个CPU核心  |         |
| Datax、logstash-input-jdbc       | 不基于redo log，只能定时sql   |         |
| tapdata、cloud canal         | 企业版收费、社区版链路不足  |  官网地址：https://tapdata.net/    https://www.clougence.com/       |
| 云厂商DTS之类 | 接云、商用  |         |