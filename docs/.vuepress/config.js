module.exports = {
  base: "/webBook",
  title: "小冯的Web手册",
  description: "小冯的Web手册",
  themeConfig: {
    sidebarDepth: 3,
    sidebar: [
      {
        title: '前端',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/front/html',
          '/front/css',
          '/front/vue',
          '/front/nvm',
        ]
      },
      {
        title: '后端',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [ 
           '/backend/springboot'
         ],
      },
      {
        title: '运维手册',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [ 
           '/yunwei/nginx',
           '/yunwei/linux'
         ],
      }
    ]
  }
};