# Vim

## 配置~/.vimrc

在用户目录下创建.vimrc文件
然后开启如下配置  配置帮助 https://www.ruanyifeng.com/blog/2018/09/vimrc.html

```shell
  1 " open line number
  2 set number
  3
  4 " language synctax
  5 syntax on
  6
  7 " show mode on the button
  8 set showmode
  9
 10 set showcmd
 11
 12 set mouse=a
 13
 14 set encoding=utf-8
 15
 16 set t_Co=256
 17
 18 filetype indent on
 19
 20 set autoindent
 21
 22 set tabstop=2
 23
 24 set shiftwidth=4
 25
 26 set expandtab
 27
 28 set softtabstop=2
 29
 30 set cursorline
 31
 32 set textwidth=80
 33
 34 set wrap
 35
 36 set linebreak
 37
 38 set visualbell
 39
 40 set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
```

## 底线命令

查看文件编码
```shell
vim song.lrc # 打开文件
:set fileencoding # 查看文件编码格式
```

使用指定编码格式查看文件
```shell
:e ++enc=utf-8
# 或者
vim song.lrc -c "e ++enc=utf-8"
```


转换编码格式
```shell
vim song.lrc
:set fileencoding=latin1
:wq
```

显示行号
```shell
:set nu
:set nonu 
```

批量替换
```shell
## 从第一行到最后一行替换文本，常用作端口替换等
:1,$s/word1/word2g
:%s/word1/word2/g

## 其他格式
:n1,n2s/word1/word2/g

## 替换前多个确认
:%s/word1/word2/gc
```


## 命令模式
移动光标
> 上下左右键盘或者hjkl对应左下上右，右手刚好放在上面。

上下翻页
> ctrl+f ctrl+b 或者PgUp PgDn

向右移动光标
> n<space> n表示向右多少个字符。

移动行首、行尾
> 移动到行首 0/Home 移动到行尾 $/End

光标在屏幕移动
> H移动到屏幕首行  L移动到屏幕底行 G移动到文档最尾行
> nG移动到指定行，比如1G == gg

删除、复制、粘贴
> x/Del为向后删除字符 nx为删除n个字符  X为向前删除
> dd为删除光标所在行 ndd
> d1G删除所在行到第一行
> dG删除所在行到最后一行
> d0删除到行首
> d$删除到行尾
> yy复制一行
> nyy复制向下n行
> y1G yG y0 y$
> p P在光标下一行粘贴/在上一行粘贴

复原、重做
> u为复原前一个动作，ctrl+r为重做上一个动作。（就是撤销复原）

切到输入模式

> i/I a/A o/O r/R
> i为从光标处开始输入
> I为在所在行第一个非空字符处输入
> a为从下一个字符开始输入
> A为从最后一个字符开始输入
> o/O为在下一行/上一行开始输入
> r/R为替换一个字符或者一直替换下去

