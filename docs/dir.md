# 项目目录结构

## React 项目

以下这种模式是我所写 React 项目的基本目录结构（没有使用 Redux 的中小型应用下，如果需要 Redux 这样的状态管理库，则可能会多一个 `models` 文件夹），下面将会对每个文件夹的作用分配进行详细说明。

- src
  - components
    - base
    - layouts
    - dash
    - media
    - note
    - ...
  - hooks
    - useGlobal.ts
    - useParams.ts
    - useRequest.ts
    - useStat.ts
    - ...
  - images
    - logo.svg
    - login.svg
    - ...
  - pages
    - media
    - note
    - ...
  - services
    - media.ts
    - note.ts
    - ...
  - types
    - media.ts
    - note.ts
    - ...
  - utils
    - api.ts
    - filter.ts
    - media.ts
    - note.ts
    - tool.ts
    - ...
  - app.tsx
  - main.tsx
  - root.less

### components

存放通用、页面内业务和容器组件的文件夹，一个页面或业务功能建立一个文件夹（参考 `pages` 的实际存放结构），里面依旧是一个组件一个文件夹（如果组件仅使用全局样式可直接存放，以 `组件名.tsx` 形式，考虑到后期扩展建议还是创建文件夹），以下两种组件文件夹基本上每个项目都固定存在。

- base
  - 通用组件（Button / Modal / InputCopy 等）
- layouts
  - 存放各种布局组件（Header / Aside / Footer 等）

保罗项目的示例：

- base
  - Button
    - index.tsx
    - Button.module.less
  - Drawer
    - index.tsx
    - Drawer.module.less
- layouts
  - Header
    - index.tsx
    - Header.module.less
  - Aside
    - index.tsx
    - Aside.module.less
- note
  - MediaDrawer
    - index.tsx
    - MediaDrawer.module.less
  - BtnPlayer
    - index.tsx
    - BtnPlayer.module.less

### hooks

存放 React Hooks 的文件夹，如果限定页面，且项目 Hooks 总量较多，可建立和页面同名的文件夹用于区分。

保罗项目的示例：

- useGlobal.ts
- useParams.ts
- useRequest.ts
- useStat.ts

### images

存放图片资源文件的文件夹，和 Hooks 的规则一样，如果限定页面，建立和页面同名的文件夹。

### pages

存放页面组件的文件夹，一个页面组件一个文件夹，可根据实际业务功能进行分组，如有样式也和页面组件一并存放。可在 `pages` 目录下增加 `index.ts` 文件，用于路由组件处引入所有页面组件（亦可使用动态加载）。

样式的文件名与页面组件相同的基础上增加类似 `.module.less` 的后缀。保罗比较鼓励使用 **CSS Modules** 而不是 **CSS in JS**（例如 `styles={ minWidth: "600px" }` ）的形式。

直接在组件里面 `import "./index.css"` 这种形式，保罗在这里也不推荐，因为这种方式会将该样式引用设置成全局样式，如果你有多个组件采用了相同的选择器，就会造成**样式冲突**，可能会产生**开发和生产环境下优先级错乱导致实际效果不一致**的问题。

保罗项目的示例：

- gallery
  - list
    - index.tsx
    - List.module.less
  - edit
    - index.tsx
    - Edit.module.less
- media
- note
- user

### services

存放请求函数集合的文件夹，可在组件内使用 `useRequest` Hooks 等方式调用，一般作用是使用 TS 约束类型传参，复用和统一管理请求，而不应该在每个页面或组件里都引入一次类型和 API 地址等。

保罗项目的示例：

- gallery.ts
- media.ts
- note.ts
- user.ts

### types

存放请求服务端各项内容的 TS 类型定义的文件夹，一般结合 `services` 函数或 `utils` 函数使用，亦可在组件内限制类型，以及对一些第三方 JS 库的类型定义（一般文件名叫 `3rd.d.ts`）。

保罗项目的示例：

- gallery.ts
- media.ts
- note.ts
- user.ts

### utils

存放页面各种工具函数的文件夹，分为通用部分（`utils.ts`）和页面部分（例如 `note.ts`），功能复杂的函数可单独存放一个文件。一般有封装请求器、时间格式转换、数字补全、是否登录等，亦可存放业务所需的数据格式化（也称过滤器）函数。

保罗项目的示例：

- api.ts
  - 请求相关定义和 fetch 实例
- utils.ts
  - 时间格式转换等通用工具函数
- fetcher.ts
  - 基于 Fetch 的请求器
- media.ts
  - 媒体相关功能的工具函数，例如根据 File 对象提取出新键值对
- note.ts
  - 日记相关功能的工具函数，例如枚举值转中文

### 其他

其他文件基本上就是「全局入口」，「全局样式」和 Vite 配置文件一类的，暂时没有对此有强烈约束。

## 微信小程序项目

微信小程序项目基本上都是以官方默认生成的目录结构为基础，也许仅仅是增加了 `services` 目录。

- components
  - note
    - detail
      - detail.js
      - detail.json
      - detail.wxml
      - detail.wxss
- pages
  - about
  - bag
  - note
  - ...
- resources
  - avatar.jpg
  - more.png
  - ...
- services
  - media.js
  - note.js
  - ...
- utils
  - api.js
  - note.js
  - ...
- app.js
- app.json
- app.wxss
- ...

### components

和 React 项目类似，如果是限定页面的组件，则建立单独的文件夹，每个组件都是一个文件夹。

### pages

同页面组件，不过每个页面必须是一个文件夹，一个路由指向一个文件夹，在这里没有根据业务类型进行文件夹嵌套存储，而是根据实际展示应用进行文件夹的命名。

- note-list
- note-detail

或者是

- note
- note-item

这两种命名方式均区分了列表页和详情页面，个人不建议将**详情页**放在**列表页**里面。

### resources

在 React 项目下，基本上只有图片资源可能需要被打包，所以只有 `images` 文件夹。其他类型的文件（例如 Excel 表格）则按照 Vite 的规则，放在了 `public` 目录下，以生成静态不变的资源地址。所以在微信这边就遵循官方的实践了。

### services

同请求函数。

### utils

同各种工具函数存储。
