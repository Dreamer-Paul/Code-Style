# Less 编码实践

Less 生成的结果还是 CSS，因此有关 CSS 的使用实践不在这里过多展开。

> 保罗使用 Less 的最主要原因是它的语法比 Sass 要简单一些，但最核心的其实还是 CSS 的嵌套功能。在 CSS 普及原生实现之前，预编译器依旧是主流的方案。

## 使用简短的选择器命名

如果你在使用 ViteJS 或 WebPack 等打包方式编写 Less，并结合 CSS Modules 的方式进行样式引用，那么实装上去就会有一个随机生成的后缀。

```tsx
// React
<div className={styles.uploader}>
  ...
</div>
```

```html
<!-- HTML -->
<div class="_uploader_17sla_1">
  ...
</div>
```

即然这种方式已经杜绝了 DOM 类名的冲突，那为什么我们不尝试用更简单的命名，再结合 Less 本身的**嵌套书写**方式来提高代码可读性和可维护性呢？

```less
// Less
.drawer {
  // ...

  &.active {
    // ...
  }

  .header, .footer {
    // ...
  }

  .header {
    .close {
      // ...
    }
  }

  .footer {
    // ...
  }

  .body {
    // ...
  }
}
```

```tsx
// React
<div className={styles.drawer)}>
  <div className={styles.header}>
    标题
    <button className={styles.close}>×</button>
  </div>
  <div className={styles.body}>
    内容
  </div>
  <div className={styles.footer}>
    页脚
  </div>
</div>
```

采用这种写法，即便是有很多层 DOM，在这种**嵌套书写**的方式下也能很快的根据选择器命名快速找到对应的元素。
