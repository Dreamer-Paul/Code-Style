# CSS 编码格式

> 这篇指南比较适合于传统 CSS，Sass / Less 等预编译器均可通用，如果你在使用 TailwindCSS / WindiCSS 这样的原子化 CSS 库，那你可以略过。

项目内所有 CSS 代码，默认使用 `2` 个空格，选择器名称后，花括号前，不包含空格。

```css
/* 👍 推荐的 */
.header{
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  position: fixed;
}

/* 👎 不推荐的 */
.header{
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  position: fixed;
}
```

不相同类型的 CSS，可以适当进行换行。这个类型主要取决于选择器本身（包含伪类的样式）及用途（同类型的重置性 CSS）

```css
/* 包含伪类的样式 */
.sidebar .user-area{
  transition: background .3s;
  border-top: 1px solid rgba(0, 0, 0, .15);
}
.sidebar .user-area:hover{ background: rgba(0, 0, 0, .2) }

/* 同类型的重置性 CSS */
.mt-1{ margin-top: .5em }
.mt-2{ margin-top: 1em }

.d-flex{ display: flex }
.d-block{ display: block }

/* 同类型的重置性 CSS（局部） */
.about-section{
  padding: 3em;
  background: #eee;
}
.about-section.bg-dark, .about-section.bg-blue{ color: #fff }
.about-section.bg-dark{ background-color: #222 }
.about-section.bg-blue{ background-color: #0077c5 }
```

## 单条属性

单条属性，不需要带上 `;` 分号符，并且和选择器并写在一行里，属性左右需要预留空格。如果属性过长，则正常书写成多条的形式。

```css
/* 较短属性 */
h1, h2, h3{ font-weight: lighter }

.mt-1{ margin-top: .5em }

.d-block{ display: block }

/* 比较长的属性 */
body.neon{
  background-image: url(img/background.png);
}
```

## 多条属性

这就是最常规的 CSS 写法了，没啥好说的了。

```css
.home-section{
  padding: 5em 0;
  background: #eee;
}

.notice{
  color: #175782;
  font-style: normal;
}
```
