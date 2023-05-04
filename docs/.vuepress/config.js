module.exports = {
  base: "/",
  title: "山雨光云的小窝",
  description: "山雨光云的小窝",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "数据结构", link: "https://shanyuguangyun.github.io/dsBook/ds/xu" },
      { text: "基础知识", link: "https://shanyuguangyun.github.io/gitBook" },
      { text: "快乐生活", link: "https://shanyuguangyun.github.io/happyLife" },
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
          "/backend/hadoop",
          "/backend/elasticsearch",
          "/backend/canal",
          "/backend/oraclecdc",
          "/backend/flinkcdc",
          "/backend/kafka",
          "/backend/arthas",
          "/backend/intelij",
          "/backend/problem",
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
      {
        title: "其他",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/other/author",
        ],
      },
    ],
  },
};
