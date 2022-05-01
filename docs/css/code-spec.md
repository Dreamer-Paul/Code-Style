# CSS 编码规范

## 伪元素优先

优先使用 `::before` 和 `::after` 伪元素实现与页面内容无关的 UI 装饰性效果（例如图标，装饰线等）

```html
<!-- 👍 推荐的 -->
<div class="note-meta">
  <span class="music">配乐</span>
</div>
<style>
.note-meta .icon-music::before {
  content: "\f025";
  font-family: FontAwesome;
}
</style>

<!-- 👎 不推荐的 -->
<div class="note-meta">
  <span class="music">
    <span class="line"></span>
    配乐
    <span class="icon"></span>
  </span>
</div>
```

## 充分利用继承特性

CSS 的部分属性是会自动从父元素中继承的，你应当充分利用它，以减少重复编写的样式属性。

```css
/* <ul class="project-list">
  <li><a href="style">奇趣框架</a></li>
  <li><a href="player">奇趣播放器</a></li>
  <li><a href="tools">奇趣小工具</a></li>
  <li><a href="single">Single 主题</a></li>
  <li><a href="fantasy">Fantasy 主题</a></li>
</ul> */

/* 👍 推荐的 */
.project-list{
  color: #555;
  padding-left: 0;
  list-style: none;
}

.project-list a{ color: inherit }

/* 👎 不推荐的 */
.project-list{
  padding-left: 0;
}
.project-list li{
  color: #555;
  list-style: none;
}

.project-list a{ color: #555 }
```

`ul` 元素去掉小点点只需要选择父元素就行，颜色也应该复用默认颜色，而不是重新写死一条固定颜色。

## 使用相对单位

`px` 是非常具有历史的 CSS 单位，它对应就是屏幕上的一个像素。随着时代的快速发展，现在人人都有一部手机，或者是一部高分屏的电脑，而这些设备的特点就是存在 ppi 缩放机制。这么看来，`px` 的短板就暴露了出来。它是死的，没有办法根据不同设备的屏幕尺寸，灵活进行适配。

替换成 `em/rem`，将会以根元素的字体大小作为基准（`em` 根据父元素），只要你使用移动设备，就可以将根元素的 `16/18px` 更换成 `14px`，展示更多的内容。在大屏设备上，可以设置成 `18/20px`，就不会在屏幕上看到过小的文字内容。

除了 `border` 可能要满足部分视觉效果必须使用 `px` 实现外，大多数属性都应该使用相对单位。

建议在如下属性中使用相对单位：

- line-height
- font-size（根元素除外）
- height / width
- padding / margin
- max-width / max-width
- min-height / max-height
- top / left / right / bottom
- transform

## 谨慎使用固定宽高

### 使用 min-width 和 max-width

容器元素使用较大的 `width` 和 `height`，可能会使得你的网站在移动端上表现很差，造成「页面溢出」，「文字过小」等现象。适当使用 `min-width` `max-width` 这样的属性，改善移动端上的浏览体验。

这是一个响应式的弹窗容器，你应当让它在手机上不会出现溢出的情况。

```css
/* 👍 推荐的 */
.modal{
  width: 60em;
  max-width: 90%;
}

/* 👎 不推荐的 */
.modal{
  width: 60em;
}
```

还有一个很常用的重制样式，可以让图片等媒体元素自适应到网页最大宽度，也是利用了这个原理。

```css
img, svg, audio, video, iframe{
  max-width: 100%;
  vertical-align: middle;
}
```

### 使用 padding 和 line-height 替代

如果想要限制一个元素的高度，不妨可以使用 `padding` 和 `line-height` 撑起来，而不是编写一个固定的 `height` 值。如果使用固定的 `height` 值，随着屏幕宽度的缩小，如果内容被换行，将会呈现出错误的效果。

```css
/* <h2>I am a testing page</h2>
<a class="btn">Click me, goddess!</a> */

/* 👍 推荐的 */
.btn{
  padding: .75em 1em;
}

/* 👎 不推荐的 */
.btn{
  height: 18px;
  padding-top: 5px;
  padding-left: 5px;
}
```

## 谨慎使用 transform 等属性

如果你在考虑给某个子元素设置 `position: sticky` 以让它随着滚动吸附在页面上方。那么就得避免在它的父元素上使用 `transform`、`filter`、`overflow`、`position` 一类的属性（还可能被设置在了 `animation` 里面），这些都有可能影响 `sticky/fixed` 的正常工作，还有可能因此产生布局差异。

```css
/* 👎 不推荐的 */
body{
  /* 这条属性可能会影响子元素滚动条的行为 */
  overflow: hidden;
}

/* 未来还会再度补充 */
```

## 避免使用 float 来编写栅格布局

现在已经是 2202 年了，使用 `float` 来布局会产生很多奇奇怪怪的对齐问题，且不利于响应式页面的设计，你应当使用 `FlexBox` 或 `Grid` 系统来进行替代。

```css
/* <div class="row">
  <div class="column">
    <p>Column A</p>
  </div>
  <div class="column">
    <p>Column B</p>
  </div>
</div> */

/* 👍 推荐的 */
.row{
  display: flex;
  row-gap: 1em;
}

.row .column{
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 .5em;
}

/* 👍 推荐的 */
.row{
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
}

/* 👎 不推荐的 */
.row::after{
  clear: both;
  content: "";
  display: block;
}

.row .column{
  width: 50%;
  float: left;
  padding: 0 .5em;
}
```

## 避免设置过高的 z-index

`z-index` 属性如果没有特殊情况，也不应该设置太大的值，即便它应该固定在页面顶部，看似需要极高的优先级。

```css
/* <header class="header"></header> */

/* 👍 推荐的 */
.header{
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  position: fixed;
}

/* 👎 不推荐的 */
.header{
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  position: fixed;
}
```

## 使用简写

如无特殊需求，一律默认使用简写形式，无需拆分出多条 CSS 属性。需要拆分的地方，应该以覆盖默认样式为主。

```css
/* 👍 推荐的 */
transition: opacity .3s;

/* 👎 不推荐的 */
transition-property: opacity;
transition-duration: .3s;
```

```css
/* 👍 推荐的 */
background: url("bg.jpg") #555 center/cover no-repeat;

/* 👎 不推荐的 */
background-color: #555;
background-size: cover;
background-image: url(bg.jpg);
background-position: center;
```

需要覆盖默认样式的情况下：

```css
/* 👍 推荐的 */
body{
  background: url(img/background.png) top center fixed;
}
body.neon{
  background-image: url(img/background-neon.png);
}

/* 👎 不推荐的 */
body{
  background: url(img/background.png) top center fixed;
}
body.neon{
  background: url(img/background-neon.png) top center fixed;
}
```

## 颜色属性

带颜色的属性，默认采用 16 进制形式表示，编写 RGB 相同色时，使用 `#eee` 简写代替 `#eeeeee` 形式。带透明度的颜色使用 `rgba()` 函数形式，如果需要 JavaScript 调色，可以使用 `hsl()` 形式。

```css
/* 👍 推荐的 */
:root{
  --primary: #009688;
  --secondly: #2ecc71;
}

body{
  color: #333;
}

.sidebar nav a{
  color: rgba(255, 255, 255, .9);
}

/* 👎 不推荐的 */
:root{
  --primary: rgb(46, 204, 113);
  --secondly: hsl(145deg, 63%, 49%);
}

body{
  color: #333333;
}

.sidebar nav a{
  color: #ffffffe6;
}
```

## 图片元素

大多数情况下，你应当确保图片能保持正确的比例显示，除了使用 `background` 容器外，你还可以使用 `object-fit` 属性解决这个问题。

```css
/* 原图为 1024x768px，而你需要展示成一个 1:1 的效果 */

/* 👍 推荐的 */
.note-image img{
  width: 5em;
  height: 5em;
  object-fit: cover;
}

/* 👎 不推荐的 */
.note-image img{
  width: 5em;
  height: 5em;
  object-fit: cover;
}
```
