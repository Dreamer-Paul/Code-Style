# 前言

这是一篇由保罗自己写代码总结出来的属于自己的代码风格，在一度「借鉴」了不少类似的文章中，又给出了自己的观点。

本手册主要列举了 HTML、CSS、JavaScript、React JSX 和 Git Commit 的规范，如果你觉得有点意思，不妨可以继续往下看。

## 不使用 Prettier

保罗在这里并不推荐直接使用「Prettier」进行代码的格式化，格式化后的效果可能无法满足你的个人意愿（需要换行区分的地方它去掉了，不需要换行的地方给你换行了）。

> 这是我加入的某个技术群里，群友的视频：[不推荐使用 Prettier](https://www.bilibili.com/video/BV15i4y1D7kw)

保罗也并不喜欢它自动处理的换行格式，他更喜欢根据实际功能将相同类型的参数或方法放在一行，来减少换行。而且过于依赖工具或许并不是一个好的选择。

```jsx
// 格式化前
<DatePicker className="w-full" format="YYYY-MM-DD HH:mm" showTime
  disabledDate={disabledDate} disabledHours={disabledHours}
  minuteStep={15}
/>

// 格式化后
<DatePicker
  className="w-full"
  format="YYYY-MM-DD HH:mm"
  showTime
  disabledDate={disabledDate}
  disabledHours={disabledHours}
  minuteStep={15}
/>
```

如果你觉得这里面的一些规则并不够合理，那么你可以大胆的和我提出来，也许我会好好思考一番。

## 参考文章

本文档的部分规范，借鉴了他人经验，感谢他们为我提供了帮助。

- 《[我是如何带领团队从零到一建立前端规范的](https://juejin.cn/post/7085257325165936648)》@不要秃头啊

## 开源声明

本项目采用 MIT 形式开源，使用了如下技术进行构建：

- VitePress
