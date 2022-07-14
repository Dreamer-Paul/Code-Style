# 项目目录结构

## React 项目

以下这种模式是我所写 React 项目的基本目录结构，继续往下看可以确认我对每个文件夹的作用分配。

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

以每个页面为结构建立一个文件夹，存放通用（Base）和页面（例如 Media）的业务组件。

### hooks

全局可使用的 Hooks，如果限定页面，可建立和页面同名的文件夹。

### pages

页面组件，一个页面一个文件夹，如有样式也和页面一并存放。

样式的文件名与页面组件相同的基础上增加类似 `.module.less` 的后缀。个人比较鼓励使用 **CSS Modules** 而不是 **CSS in JS**（例如 `styles={ minWidth: "600px" }` ）的形式。

### services

请求函数，可使用 `useRequest` Hooks 等方式调用，一般作用是使用 TS 约束类型传参，复用和统一管理请求，而不应该在每个页面或组件里都引入一次类型和 API 地址等。

### types

定义各个接口请求的 TS 类型，以及一些第三方 JS 库的类型定义。

### utils

各种工具函数，一般有封装请求器、时间格式转换、数字补全、是否登录等，亦可存放业务所需的数据格式化（也称过滤器）函数。

### 其他

其他文件基本上就是「全局入口」，「全局样式」和 Vite 配置文件一类的，暂时没有对此约束。
