---
outline: deep
---

# 系统环境

## 跨平台

### 软件

- [Google Chrome](https://www.google.com/chrome)：🪟🍎🐧 前端开发调试必备的浏览器
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)
- [Firefox](https://www.mozilla.org/zh-CN/firefox/products)：🪟🍎🐧 浏览器的替代选择，顺带检测下代码的兼容性
- [Visual Studio Code](https://code.visualstudio.com)：🪟🍎🐧 前端主力编辑器
  - 插件参考：[我的开发工具集](https://paugram.com/coding/my-frontend-dev-tools.html)
- [GitHub Desktop](https://desktop.github.com)：🪟🍎 没法用 SSH 拉代码就用它了
  - 目前官方版本只支持 Windows 和 MacOS
- [SourceTree](https://www.atlassian.com/software/sourcetree)：🪟🍎 免费的 Git 可视化软件
  - 个人认为 MacOS 版本比 Windows 版本更好用一些
- [FileZilla](https://filezilla-project.org)：🪟🍎🐧 FTP 文件传输
- [Postman](https://www.postman.com/downloads)：🪟🍎🐧 API 文档和测试工具
  - 别问我为什么不是国产某某某，因为它的知名度还是最高的
- [FontForge](https://fontforge.org)：🪟🍎🐧 开源免费的跨平台字体生成工具，可用于网页字体等
- [WPS Office](https://www.wps.cn)：🪟🍎🐧 国产办公软件
  - 除了 Windows 版都是比较良心的无广告软件，相较于 Office 全家桶它的占用还是比较小的
- [KDE Connect](https://kdeconnect.kde.org)：🪟🍎🐧 跨平台连接工具，可传输文件、剪贴板、远程操控等功能
- [OBS](https://obsproject.com)：🪟🍎🐧 跨平台且免费的直播软件，不多说
- [Affinity Photo](https://affinity.serif.com)：🪟🍎 跨平台的照片编辑软件，可购永久授权

### 命令行软件

- [Cloc](https://github.com/AlDanial/cloc)：统计代码行数
  - @Innei 提供的快速使用命令：`cloc . --exclude-dir=node_modules,.nuxt,.next,build,.vscode,dist,release,tmp --exclude-lang=JSON,SVG,XML`
- [FFmpeg](https://github.com/FFmpeg/FFmpeg)：几乎万能的开源媒体格式转换工具
- [exiftool](https://github.com/exiftool/exiftool)：读取、写入照片不限于 EXIF 信息的工具
- [ImageMagick](https://github.com/ImageMagick/ImageMagick)：图像处理工具，比 FFmpeg 要更专业

## Windows

### 运行环境

- [NVM Windows](https://github.com/coreybutler/nvm-windows) + NodeJS 套装
- [Xampp](https://www.apachefriends.org/download.html)：PHP 集成环境
  - Apache + MariaDB + PHP + Perl

### 软件

- [TortoiseGit](https://tortoisegit.org)
- [TortoiseSVN](https://tortoisesvn.net)
- Clash For Windows
- [DevToys](https://github.com/veler/DevToys)：开发者工具
  - 内置时间戳转换、代码格式化、生成 MD5、Markdown 预览、JWT 解析、图片转换等
- [PowerToys](https://github.com/microsoft/PowerToys)：如其名曰，是一款系统辅助工具
  - 内置颜色选择、窗口布局、文件管理器功能拓展等
- [WinSCP](https://winscp.net)：图形化 SCP 工具，比 SFTP 协议的要好用一些？
- [XShell](https://www.xshell.com/zh/xshell)：一款老牌的 SSH 工具，个人授权免费

### 命令行软件

- [tcping](https://elifulkerson.com/projects/tcping.php)：模拟 TCP 连接检测工具

### 终端

- [PowerShell 7](https://github.com/PowerShell/PowerShell)（内置的太老了，赶紧换掉它）

### 虚拟机

- [VMware WorkStation Pro](https://www.vmware.com/products/workstation-pro.html)（话不多说）

## MacOS

### 包管理工具

- [HomeBrew](https://brew.sh)：Mac 包管理器（万物起源）

### 运行环境

- NVM + NodeJS 套装
  - 这里建议直接使用 HomeBrew 安装

### 软件

- [CotEditor](https://github.com/coteditor/CotEditor)：Mac 独占的一次性编辑器
- V2RayU：懂得都懂
- ClashX Pro：懂得都懂
- [DevToys](https://github.com/ObuchiYuki/DevToysMac)：DevToys 的 Mac 版本
- [IINA](https://iina.io)：Mac 独占的播放器，媲美 QuickTime 的界面，更强的解码
- [Microsoft Remove Desktop Beta](https://aka.ms/rdmacbeta)：Windows 远程桌面工具（可惜 Linux 没有）
- CleanMyMac X：Mac 系统维护和清理软件（也有 Windows 的）
- [iStat Menus](https://bjango.com/mac/istatmenus)：Mac 独占的付费系统监控软件（我嫖 @Innei 的）
- [MacZip](https://ezip.awehunt.com)：Mac 独占的压缩软件，重点是免费
- Reeder：RSS 阅读软件，目前我用的是商店里绝版的 V4 版本，曾经限免获取的
- [Hammerspoon](https://www.hammerspoon.org)：多功能系统扩展应用，例如可以用它结合插件实现实现快捷键分屏
  - [ShiftIt](https://github.com/peterklijn/hammerspoon-shiftit)：没错，就是这个插件，体验毫不逊色于付费软件
- [Android File Transfer](https://www.android.com/filetransfer)：在 Mac 上管理安卓手机文件
- [Macs Fan Control](https://crystalidea.com/macs-fan-control)：风扇转速控制软件，免费版够用

### 终端

- 内置终端
- [ITerm2](https://iterm2.com)
  - 用了一阵子貌似没感觉比内置的好多少

### 虚拟机

- [VMware Fusion](https://www.vmware.com/products/fusion.html)
  - 除了 Parallels 第二好用的 Mac 虚拟机软件吧，个人用户我记得可以申请免费许可证

## Linux (Deepin)

### 运行环境

- [NVM](https://github.com/nvm-sh/nvm) + NodeJS 套装

### 软件

- [GitHub Desktop](https://github.com/shiftkey/desktop)（民间版）
- Qv2ray
- Clash For Windows

### 虚拟机

- [VirtualBox](http://www.virtualbox.org)
  - 应该是 Linux 上的唯一选择了吧

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
