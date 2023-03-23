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

一些常用插件如下，其中-代表去掉该插件。不过吐槽下，这个插件有时候慢到无法忍受

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
            "github": "http://honghongwen.github.com"
        }
    },
    "output": null,
    "pdf": {
        "fontSize": 12,
        "footerTemplate": null,
        "headerTemplate": null,
        "margin": {
            "bottom": 36,
            "left": 62,
            "right": 62,
            "top": 36
        },
        "pageNumbers": false,
        "paperSize": "a4"
    },
    "plugins": [
        "-livereload",
        "-sharing",
        "expandable-chapters-small",
        "insert-logo",
        "code",
        "search-plus",
        "hide-element",
        "splitter",
        "mermaid-gb3",
        "-copy-code-button",
        "-tbfed-pagefooter",
        "-valine"
    ],
    "title": "FENGWEN wiki",
    "variables": {},
    "pluginsConfig": {
        "hide-element": {
            "elements": [".gitbook-link"]
        },
        "insert-logo": {
            "url": "/images/subscribe.png",
            "style": "background: none; max-height: 120px; min-height: 120px"
        },
        "anchor-navigation-ex": {
            "showLevel": false, 
            "showGoTop": false 
        },
        "lightbox": {
            "includeJQuery": false,
            "sameUuid": true,
            "options": {
                "resizeDuration": 0,
                "wrapAround": false
            }
        },
        "tbfed-pagefooter": {
            "copyright":"Copyright ©Sinfor",
            "modify_label": "更新时间：",
            "modify_format": "YYYY-MM-DD HH:mm:ss"
        }
    }
}
```

安装插件
```shell
gitbook install
```

[可供参考文章](https://jiangminggithub.github.io/gitbook/)
