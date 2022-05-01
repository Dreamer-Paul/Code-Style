
# JS 编码规范

## 逻辑语句

### 使用 && 运算符

在一个判断条件和一个执行函数的情况下，可以使用 `&&` 和运算符，简洁明了。

```javascript
// 👍 推荐的
visible && getListRequest();

// 👎 不推荐的
if (visible) getListRequest();
```

### 减少 if 嵌套

缺少正确参数时，可以在函数前面 `return` 避开执行后续逻辑，减少代码嵌套 `if`，改善代码可读性。

```javascript
// 👍 推荐的
const onStatusChange = (value) => {
  if (!value) return;

  setValue(value);
  setData(data[value]);
}

// 👎 不推荐的
const onStatusChange = (value) => {
  if (value) {
    setValue(value);
    setData(data[value]);
  }
}
```

## 三元表达式

三元表达式，如无必要，尽可能不要嵌套使用，代码的可读性会比较差。

```javascript
// 👍 推荐的
is_default ? "Yes" : "No"

// 👎 不推荐的
status === "success" ? "Success" : (status ==== "pending" ? : "Pending" : "Failed")
```

::: details 替代方案

遇到上述情况，可优先使用函数封装判断过程，优先推荐使用「键名获取」的方式完成，其次在使用 `if` 或 `switch` 语句进行替代。

```javascript
const statusKey = {
  success: "Success",
  pending: "Pending",
  failed: "Failed"
}

function statusParse(status) {
  const _item = statusKey[status];

  if (!_item) return "Err";

  return _item;
}
```

:::

## 使用简化形式

### 语法糖

使用「语法糖」方法替代传统代码，提高代码可读性。

```javascript
// 👍 推荐的
const _newData = data.map(item => ({
  id: data.id,
  title: data.name,
  url: `/product/${data.id}`
}));

// 👎 不推荐的
let _newData = [];

for (let i = 0; i < data.length; i++) {
  _newData.push({
    id: data.id,
    title: data.name,
    url: `/product/${data.id}`
  });
}
```

### 减少使用 return

只需返回内容的函数，如果内容篇幅不长，无需编写 `return`。

```javascript
const parseType = (type) => type === 1 ? "Yes" : "No";

const parseType = (type) => (
  type === 1 ? "Yes" : "No"
);

const parseSubmitData = (data) => (({
  name: data.title,
  type: data.type,
  content: data.content
}));
```
