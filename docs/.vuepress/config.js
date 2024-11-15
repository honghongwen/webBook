module.exports = {
  base: "/",
  title: "山雨光云小集",
  description: "山雨光云小集",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "基础知识", link: "https://shanyuguangyun.github.io/gitBook" },
      { text: "问卷网页", link: "https://qms.shanyuguangyun.cn" },
      { text: "LeetCode", link: "https://github.com/shanyuguangyun/leetcode" },
      { text: "GitHub", link: "https://github.com/shanyuguangyun" },
    ],
    sidebar: [
      {
        title: "前端", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/front/vue", 
          "/front/nvm"
        ],
      },
      {
        title: "后端",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/backend/springboot",
          "/backend/threadpool",
          "/backend/logback",
          "/backend/easyexcel",
          "/backend/fdfs",
          "/backend/redis",
          "/backend/hadoop",
          "/backend/elkf",
          "/backend/elasticsearch",
          "/backend/canal",
          "/backend/oraclecdc",
          "/backend/flinkcdc",
          "/backend/kafka",
          "/backend/arthas",
          "/backend/intelij",
          "/backend/problem",
          "/backend/ab",
          "/backend/499",
          "/backend/ssm",
          "/backend/oracle"
        ],
      },
      {
        title: "运维手册",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/yunwei/vmware",
          "/yunwei/nginx",
          "/yunwei/linux",
          "/yunwei/vim",
          "/yunwei/supervisor",
          "/yunwei/gitbook",
          "/yunwei/gitlab",
          "/yunwei/jenkins",
          "/yunwei/redis",
          "/yunwei/prometheus",
          "/yunwei/rabbitmq",
          "/yunwei/wiki",
          "/yunwei/wakuang",
        ],
      },
    ],
  },
};
