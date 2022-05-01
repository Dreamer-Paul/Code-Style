# JS 命名规范

临时性质的变量，开头带上 `_` 下划线，例如 `_result`，`_country_state` 等等，这种命名的变量，其实就是「工具人」的作用，暂时性存储一种形式的变量，用于后期被处理成其他形式。例如用来满足 UI 组件渲染（多合一），或是处理成提交接口所需要的形式（一变多）。

```javascript
const country = "China";
const state = "Guangdong";

// 因为表单控件只接受一个 value，所以你只能变成数组形式传入
const _country_state = [country, state];
```
