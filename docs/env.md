# 系统环境

## 通用

### 软件

- [Google Chrome](https://www.google.com/chrome)（开发调试必备）
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)
- [Firefox](https://www.mozilla.org/zh-CN/firefox/products)（替代浏览器）
- [Visual Studio Code](https://code.visualstudio.com)（主力编辑器）
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)
- [FileZilla](https://filezilla-project.org)（FTP 文件传输）
- [Postman](https://www.postman.com/downloads)（别问我为什么不是国产某某某，因为它的知名度还是最高的）
- [FontForge](https://fontforge.org)（开源免费的跨平台字体生成工具，可用于网页字体等）
- WPS Office（除了 Windows 版，都是比较良心的无广告软件，相较于 Office 全家桶它的占用还是比较小的）

## Windows

### 运行环境

- [NVM Windows](https://github.com/coreybutler/nvm-windows) + NodeJS 套装

### 软件

- [SourceTree](https://www.atlassian.com/software/sourcetree)
- TortoiseGit / TortoiseSVN
- Clash For Windows

### 终端

- [PowerShell 7](https://github.com/PowerShell/PowerShell)（内置的太老了，赶紧换掉它）

### 虚拟机

- [VMware WorkStation Pro](https://www.vmware.com/products/workstation-pro.html)（话不多说）

## MacOS

### 包管理工具

- [HomeBrew](https://brew.sh)（万物起源）

### 运行环境

- NVM + NodeJS 套装（这里建议直接使用 HomeBrew 安装）

### 软件

- CotEditor（Mac 独有的一次性编辑器）
- [SourceTree](https://www.atlassian.com/software/sourcetree)
- V2rayU
- ClashX
- [IINA](https://iina.io)（媲美原生播放器的体验，更强的解码器）
- Microsoft Remove Desktop（Windows 远程桌面，可惜 Linux 没有）
- CleanMyMac X（Mac 系统维护和清理软件）
- iStat Menus（付费的系统监控软件，我嫖 @Innei 的）
- [MacZip](https://ezip.awehunt.com)（免费的压缩软件）

### 终端

- 内置终端
- [ITerm2](https://iterm2.com)（用了一阵子貌似没感觉比内置的好多少）

### 虚拟机

- [VMware Fusion](https://www.vmware.com/products/fusion.html)（除了 Parallels 第二好用的 Mac 虚拟机软件吧，个人用户我记得可以申请免费许可证）

## Linux (Deepin)

### 运行环境

- [NVM](https://github.com/nvm-sh/nvm) + NodeJS 套装

### 软件

- [GitHub Desktop](https://github.com/shiftkey/desktop)（民间版）
- Qv2ray
- Clash For Windows

### 虚拟机

- [VirtualBox](http://www.virtualbox.org)（应该是 Linux 上的唯一选择了吧）

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