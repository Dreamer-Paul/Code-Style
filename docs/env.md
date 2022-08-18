# 系统环境

## 通用

### 软件

- [Google Chrome](https://www.google.com/chrome)（开发调试必备）
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)
- [Visual Studio Code](https://code.visualstudio.com)
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)

## Windows

### 运行环境

- [NVM Windows](https://github.com/coreybutler/nvm-windows) + NodeJS 套装

### 软件

- [SourceTree](https://www.atlassian.com/software/sourcetree)
- TortoiseGit / TortoiseSVN
- Clash For Windows

## MacOS


### 包管理工具

- [HomeBrew](https://brew.sh)（万物起源）

### 运行环境

- [NVM](https://github.com/nvm-sh/nvm) + NodeJS 套装

### 软件

- CotEditor
- [SourceTree](https://www.atlassian.com/software/sourcetree)
- V2rayU
- Clash

## Linux (Deepin)

### 运行环境

- [NVM](https://github.com/nvm-sh/nvm) + NodeJS 套装

### 软件

- [GitHub Desktop](https://github.com/shiftkey/desktop)（民间版）
- Qv2ray
- Clash For Windows

### 配置文件

可能是发行版之间存在差异，部分系统需要修改配置文件才能更好的使用。

#### .vimrc

::: warning 注意：
Deepin 的 Vim 默认开启了可视化块选复制功能（Visual 模式），但由于无法接入系统剪切板，会被存储到 Vim 自身的寄存器。@提莫

这种骚操作会直接导致无法复制编辑器里的内容，这里直接禁用 Visual 模式解决。
:::

```
:set mouse-=a
```
