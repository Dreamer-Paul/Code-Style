import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Code Style",
  description: "Paul's Coding Style Handbook",

  themeConfig: {
    repo: "Dreamer-Paul/Code-Style",
    nav: [
      { text: "前言", link: "/intro", activeMatch: "^/intro" },
      {
        text: "外观",
        items: [
          { text: "CSS", link: "/css/format", activeMatch: "^/css" },
          { text: "Less", link: "/less/practice", activeMatch: "^/less" }
        ]
      },
      {
        text: "脚本",
        items: [
          { text: "JavaScript", link: "/javascript/name-spec", activeMatch: "^/javascript" },
          { text: "React", link: "/react/name-spec", activeMatch: "^/react" }
        ]
      },
      {
        text: "其他",
        items: [
          { text: "系统环境", link: "/env", activeMatch: "^/env" },
          { text: "Git 管理", link: "/git", activeMatch: "^/git" },
          { text: "项目目录结构", link: "/dir", activeMatch: "^/dir" }
        ]
      },
    ],
    sidebar: {
      "/css/": getCSSSidebar(),
      "/less": getLessSidebar(),
      "/javascript": getJSSidebar(),
      "/react": getReactSidebar(),
    }
  }
})

function getCSSSidebar() {
  return [
    {
      text: "CSS",
      children: [
        { text: "编码格式", link: "/css/format" },
        { text: "编码实践", link: "/css/practice" },
      ]
    }
  ]
}

function getLessSidebar() {
  return [
    {
      text: "Less",
      children: [
        { text: "编码实践", link: "/less/practice" },
      ]
    }
  ]
}

function getJSSidebar() {
  return [
    {
      text: "JavaScript",
      children: [
        { text: "命名规范", link: "/javascript/name-spec" },
        { text: "编码格式", link: "/javascript/format" },
        { text: "编码规范", link: "/javascript/code-spec" },
      ]
    }
  ]
}

function getReactSidebar() {
  return [
    {
      text: "React",
      children: [
        { text: "命名规范", link: "/react/name-spec" },
        { text: "编码规范", link: "/react/code-spec" },
        { text: "编码实践", link: "/react/practice" },
      ]
    }
  ]
}
