# GitBook

## 说明
gitbook是一款很好的工具，但是其越来越像商业化发展，而非一款用心的开源文档工具。但是其页面非常简洁清爽，所以也花了时间捣鼓了下。除了他的在线版外，可以私有化部署到本地。这里讲的当然是私有化
[官网](https://www.gitbook.com/)
[官方部署文档](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md)

## 安装

gitbook的安装依赖node，因为电脑比较老，所以我这边的node版本还是13.14.0(也是win7最高支持的版本)，如果有node版本问题可能需要找到对应版本
老电脑上操作起来还是挺麻烦的，经常各种各样的版本问题。
```shell
npm install gitbook-cli@2.3.2 -g
```


新建文件夹，新建README.md和SUMMARY.md
```shell
mkdir bookName
cd bookName
```

```md
# Summary
* [Introduction](README.md)
* [Chapter1](chapter1/README.md)
    * [Section1.1](chapter1/section1.1.md)
    * [Section1.2](chapter1/section1.2.md)
* [Chapter2](chapter2/README.md)
```
```md
This is a book powered by [GitBook](https://github.com/GitbookIO/gitbook).
```

运行
```shell
gitbook init

gitbook serve
```

打开localhost:4000


## 插件使用

新建book.json

gitbook自带五个插件，可以选择-去掉
| 名称          | 说明                        |
| ------------- | --------------------------- |
| highlight     | 语法高亮插件，代码高亮功能  |
| search        | 搜索插件，不支持中文搜索    |
| sharing       | 分享插件，右上角分享功能    |
| font-settings | 字体设置（最上方的"A"符号） |
| livereload    | 热加载插件                  |



一些常用插件如下，其中-代表去掉该插件。不过吐槽下，这个插件下载慢到无法忍受

| 名称        | 说明           |
| ----------- | -------------- |
| insert-logo | 网站logo       |
| favicon     | 网页title图标  |
| search-pro  | 支持中文的搜索 |
| splitter    | 侧边栏可调节   |
| lightbox  | 图片弹窗显示     |
| hide-element  | 隐藏不想看的内容     |

```json
{
  "author": "fengwen",
  "description": "FENGWEN WIKI",
  "extension": null,
  "generator": "site",
  "links": {
    "sharing": {
      "all": null,
      "facebook": null,
      "google": null,
      "twitter": null,
      "weibo": null
    },
    "sidebar": {
      "GitHub": "https://github.com/honghongwen"
    }
  },
  "output": null,
  "plugins": [
    "-highlight",
    "-search",
    "-sharing",
    "-livereload",
    "-font-settings",
    "-code",
    "-lunr",
    "-search-plus",
    "-mermaid-gb3",
    "-lightbox",
    "-copy-code-button",
    "-tbfed-pagefooter",
    "-valine",
    "insert-logo",
    "hide-element",
    "splitter"
  ],
  "title": "FENGWEN WIKI",
  "variables": {},
  "pluginsConfig": {
    "hide-element": {
      "elements": [".gitbook-link"]
    },
    "insert-logo": {
      "url": "/images/subscribe.png",
      "style": "background: none; max-height: 120px; min-height: 120px"
    }
  }
}
```

[最终效果](https://honghongwen.github.io/gitBook)
[可供参考文章](https://jiangminggithub.github.io/gitbook/)
