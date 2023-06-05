# React 编码实践

## 引入外部 SDK 库

在 React 组件或 Hooks 内部使用外部的 SDK 库是一个非常常见的业务场景，此时不建议将实例存放在 React 的状态内部，会产生额外的重新渲染，而这样造成的重新渲染却并没有实际价值。

```javascript
// 👍 推荐的
const clientRef = useRef();

useEffect(() => {
  const client = anExternalClient.init({
    appId: "",
    onMessage: () => {},
  });

  // 设置一个实例，并不会造成子组件渲染
  clientRef.current = client;

  return () => {
    client.destroy();
    clientRef.current = undefined;
  }
}, []);

// 👎 不推荐的
const [state, dispatch] = useReducer(reducer, initState);

useEffect(() => {
  const client = anExternalClient.init({
    appId: "",
    onMessage: () => {},
  });

  // 会造成没有实际作用的组件重新渲染
  dispatch({
    type: "client",
    payload: client,
  });

  return () => {
    client.destroy();
    dispatch({
      type: "client",
      payload: undefiend,
    });
  }
}, []);
```
