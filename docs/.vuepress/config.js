module.exports = {
  base: "/webBook/",
  title: "小冯的Web手册",
  description: "小冯的Web手册",
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "基础知识", link: "https://honghongwen.github.io/gitBook" },
      { text: "GitHub", link: "https://github.com/honghongwen" },
    ],
    sidebar: [
      {
        title: "前端", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: ["/front/html", "/front/css", "/front/vue", "/front/nvm"],
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
