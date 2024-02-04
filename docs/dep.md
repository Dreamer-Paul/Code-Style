---
outline: deep
---

# 开源库推荐

## JavaScript

### 工具

- axios
  - 相较于手写封装 `fetch`，这是一个最省时的方式了，如果对打包大小有执着，还是建议手写一个吧
- clsx
  - 这个东西最基础的使用方式，甚至你也可以手写一个 `clsn.filter(item => item).join(" ")`
- dayjs
  - 时间与日期处理
- crypto-js
  - MD5、SHA 等前端本地加密
- decimal.js
  - 用于更正浮点数的计算结果

### 框架

- react
- vue
- vitepress
  - 用于编写文档网站的框架，也是当前网站所使用的
- next
  - NextJS 懂得都懂，是你使用 React 难以逃离的元框架
- remix
  - 厌倦了 NextJS 你还可以选择它，获取数据的方式非常独特
- svelte
  - 不使用虚拟 DOM 的框架，其语法较为独特，需要单独学习使用

### 样式

- less
  - 虽然不少大佬在用 Scss/Sass，但我觉得 Less 更容易掌握
- tailwindcss
  - 看需求做选择吧，原子化 CSS 并不是必须要用的
- postcss
  - 既然都用到 Tailwind 了，那么这个你也最好装一下了
- autoprefixer

### Vue

自己的 Awesome Vue 清单

- pinia
  - 状态管理库，和 Zustand 用起来体验是很相似的
- vue-i18n
- vue-router

### React

自己的 Awesome React 清单

- antd
  - 覆盖业务最全的组件库，真的没出现第二个比它更能打的
- ahooks
  - 这里面我其实还是 `useRequest` 用的比较多，还可以选择另外的请求库
- react-i18next
- react-router-dom
- zustand
  - 我比较喜欢使用的状态管理库
- @tanstack/react-query
  - 另外一个请求 Hooks 库

### 其他

- @spiriit/vite-plugin-svg-spritemap
  - Vite 的插件，可以把多个 SVG 图标文件转换成雪碧图，以加速网站加载图标

## PHP

- catfan/medoo
  - 数据库 ORM 库，也是我小窝项目唯一使用的第三方库
