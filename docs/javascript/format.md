---
outline: deep
---

# JS 编码格式

所有代码后面均带上 `;` 收尾。

## 空格与换行

代码内容统一使用双引号，而不是使用单引号，默认使用 `2` 个空格，不要使用 `Tab` 或 `4` 个空格。

```javascript
const data = [];

data.map(item => `${item.name} - ${item.desc}`);

function genQuery(querys: Record<string, string | number>) {
  let str = "";
  let key = 0;
  let length = Object.keys(querys).length;

  for (let item in querys) {
    if (key === 0) {
      str += "/?";
    }
    else if (key < length) {
      str += "&";
    }

    key++;
    str += item + "=" + querys[item];
  }

  return str;
}
```

## 逻辑语句

默认留下一个空格，项目内格式统一

```javascript
// 👍 推荐的
if (when) {
  console.log("Succeed");
}
else {
  console.log("Failed");
}

// 👎 不推荐的
if(when){
  console.log("Succeed");
}else{
  console.log("Failed");
}
```

## 对象表示

不需要修改的固定数据，使用 `const` 声明，需要修改的数据，使用 `let` 声明。

```javascript
// 固定的数据
const statusKey = {
  success: "Success",
  pending: "Pending",
  failed: "Failed"
};

// 需要修改的数据
let submitData = {
  id: 1,
  name: "Paul's Blog",
  desc: "Dreamer-Paul's Personal Blog"
};

...

const onChange = (name) => {
  submitData.name = name;
}
```

只有一行数据的情况下，无需换行。

```javascript
// 单个数据，不换行
const user = [{ name: "Paul", type: "admin" }];

// 多个数据，但字段较少，依然不换行
const user = [
  { name: "Paul", type: "admin" },
  { name: "Eric", type: "admin" },
  { name: "Kevin", type: "admin" }
];
```

类似场景，`import` 引用模块也是这样，相同类型的引用放在一行，方便区分。

```javascript
import { api, request } from "@/utils/api";

import {
  IStockTransferParams, IStockTransferData,
  IStockTransferEditParams, IStockTransferEditData,
  IStockTransferAuditParams, IStockTransferAuditData
} from "@/types/StockTransfer";
```
