# React 命名规范

## 渲染性工具函数

这种函数都是用来渲染 JSX 元素里面的参数的，大概分两种情况。

```typescript
// 枚举替换函数
const statusKey: Record<string, string> = {
  "pass": "Passed"
};

// 格式化数据函数（上面这种情况也可以用 Map）
const statusMap: Record<string, string> = {
  "pass": { color: "green", text: "Passed" }
};
```

## 页面级功能函数

异步请求类功能函数，基本维持 CRUD 原则，均带 Request 后缀，但这里结合了请求方式和数据库操作的命名

```
// 增删改查式命名
getMusicRequest
createMusicRequest
updateMusicRequest
removeMusicRequest

// 较为单一的业务操作式命名
applyInboundRequest
cancelOrderRequest
```

视图组件的功能函数，以组件本身来命名，如果业务并不复杂，建议直接写在组件的回掉传参里。

```tsx
const onModalClose = () => {
  getMusicRequest();
}
```

## 组件参数和回调

编写组件，方法名称必须带 `on` 前缀，属性和方法适当进行换行，如果只有一个 `onXXXX`，可以和属性并排一行。

```tsx
<LogisticDetails visible={visible}
  onAddressSubmit={updateAddressRequest}
  onConfirm={confirmAddressRequest}
/>
```

如无必要，不要在一个表格组件里以一行为单位生成 N 行个弹窗组件
