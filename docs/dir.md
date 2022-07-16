# 项目目录结构

## React 项目

以下这种模式是我所写 React 项目的基本目录结构（没有使用 Redux 的中小型应用下，如果需要 Redux 这样的状态管理库，则可能会多一个 `models` 文件夹），继续往下看我将会对每个文件夹的作用分配进行说明。

- src
  - components
    - Base
    - Layouts
    - Dash
    - Media
    - Note
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
    - Media
      - List.tsx
      - List.module.less
      - Edit.tsx
      - Edit.module.less
    - Note
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
    - tool.ts
    - ...
  - app.tsx
  - main.tsx
  - root.less

### components

以每个页面为结构建立一个文件夹，存放通用（Base）和页面（例如 Media）的业务组件。以下两种组件文件夹基本上每个项目都固定存在。

- Base
  - 通用组件（Button / Modal / InputCopy 等）
- Layouts
  - 存放各种布局组件（Header / Aside / Footer 等）

### hooks

全局可使用的 Hooks，如果限定页面，可建立和页面同名的文件夹。

### images

图片资源文件，和 Hooks 的规则一样，如果限定页面，建立和页面同名的文件夹。

### pages

页面组件，一个页面一个文件夹，如有样式也和页面一并存放。

样式的文件名与页面组件相同的基础上增加类似 `.module.less` 的后缀。个人比较鼓励使用 **CSS Modules** 而不是 **CSS in JS**（例如 `styles={ minWidth: "600px" }` ）的形式。

### services

请求函数，可使用 `useRequest` Hooks 等方式调用，一般作用是使用 TS 约束类型传参，复用和统一管理请求，而不应该在每个页面或组件里都引入一次类型和 API 地址等。

### types

定义各个 API 接口请求的 TS 类型，以及对一些第三方 JS 库的类型定义（一般文件名叫 `3rd.d.ts`）。

### utils

各种工具函数，一般有封装请求器、时间格式转换、数字补全、是否登录等，亦可存放业务所需的数据格式化（也称过滤器）函数。

### 其他

其他文件基本上就是「全局入口」，「全局样式」和 Vite 配置文件一类的，暂时没有对此约束。

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

同页面组件，不过每个页面必须是一个文件夹，一个路由指向一个文件夹，在这里没有进行文件夹嵌套存储，而是根据实际展示应用进行文件夹的命名。

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
