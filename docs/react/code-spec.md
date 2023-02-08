# React 编码规范

JavaScript / TypeScript 写法，和本指南中 JavaScript 中的部分基本吻合。这里主要说下 React JSX 语法下的一些规范。下文仅适用于 React 和类似用法（Preact / SolidJS）的框架。

## 引入模块

使用 `import` 引入模块将根据其类型和作用进行分类，还根据其来源（框架，外部包，项目内引用）来编写。

引用模块的类型，保罗是这样进行分类的：

- 框架引用（例如 React）
- 样式和 UI 组件引用（例如 Ant Design）
- 工具类库引用（例如 Lodash 或者是自己封装的工具函数）
- TypeScript 类型引用和适用于该文件内函数/组件的类型定义
- 组件函数本体

```tsx
// React
import React, { useRef } from "react";
import useRequest from "@/hooks/useRequest";


// UI
import styles from "./DatePicker.module.less";

import { Card, Button } from "antd";


// Tool
import { isLogined, parseJWTData } from "@/utils/tool";


// Interface
import { IUserInfo } from "@/types/user";

interface UserCardProps {
  user: IUserInfo
}


// Component
function UserCard(props) => {
  // ...
}
```

来源的引入顺序是：外部包、项目内部模块，例如这段代码，React 作为外部包，其优先级在前。

```tsx
// React
import React, { useRef } from "react";
import useRequest from "@/hooks/useRequest";
```

### 引入样式

如果是全局样式，可在入口文件（一般为 `app.tsx` 或 `main.tsx`）里直接使用 `import` 进行导入，而无需设置任何名称。

```tsx
import "./global.css";
```

如果是局部样式，保罗推荐使用 **CSS Modules** 形式引入样式，再结合 Less/Sass 等预编译器的**嵌套**编写方式，可在**简化类选择器命名**的同时，**不干扰**任何采用相同命名的其他组件。关于 Less 的书写规范，可以查阅本文档的对应页面。

```tsx
// 👍 推荐的
import styles from "./DatePicker.module.less";

<div className={styles.picker}>
  ...
</div>

// 👎 不推荐的
import "./DatePicker.module.less";

<div className="paul-date-picker">
  ...
</div>
```

## 导出模块

一个文件导出一个模块（例如 React 的单个组件），默认使用 `export default {name}` 形式。

```tsx
// Component
function UserCard(props) => {
  ...
}

export default UserCard;
```

一个文件导出多个模块，使用 `export const {name}`（推荐）或 `export { name, name }` 形式。

```ts
export const isLogined = () => {
  ...
}

export const parseJWTData = () => {
  ...
}
```

或者是

```ts
const isLogined = () => {
  ...
}

const parseJWTData = () => {
  ...
}

export { isLogined, parseJWTData };
```

## 组件参数和回调

如果组件没有任何 `children`，你需要用 `/>` 形式进行结尾。就和 HTML 的 `input` `img` 等元素的写法 `<input type="text" />` 差不多。

```tsx
// 👍 推荐的
<ModalTable data={props.data} />

// 👎 不推荐的
<ModalTable data={props.data}></ModalTable>
```

如果一个组件同时有多个参数和回调函数，同类型的多个参数，可放一行，太长再换行。

```tsx
// data 和 variant 是同类只入不出的参数，放一行
<Modal className={styles.modal} visible={visible}
  data={stat.data[index]} variant={stat.variant}
  onChange={onModalChange} onSubmit={onModalSubmit}
/>

// 只有一个 `onXXX` 函数，如果比较长就可以单独占用一行。
<Select className="w-full" value={stat.data.currency}
  onChange={value => setProperty("currency", value)}
>
  <Select.Option value="MYR">MYR (RM)</Select.Option>
</Select>
```

用更少的 `props` 做同样的事，数据类参数，可使用 `TypeScript` 限定类型，而不是拆分为多个参数传入组件。

```tsx
// 👍 推荐的
<UserCard data={user} onChange={updateUserRequest} />

// 👎 不推荐的
<UserCard name={user.name} avatar={user.avatar} email={user.avatar}
  onChange={updateUserRequest}
/>
```

## 状态定义

### 同类数据归类

使用「自定义 Hooks」将同类数据进行归类，而不应该一个数据一个 `useState`。

如果采用后者进行开发，一旦后期程序的业务逻辑疯狂扩张，就会极其混乱，你需要同时执行多个 `setState` 函数。且大幅度降低了可读性，且容易产生设置遗漏。

```tsx
// 👍 推荐的
// 用来提交接口的参数，这些都是默认的值，可以通过 setParams 修改局部数据，也可使用 resetParams 还原为初
const [params, setParams, resetParams] = useParams({
  page: 1,
  type: "all"
});

setParams({ page: 1, type: "pending" }); // 修改 type，回到第一页

// 👎 不推荐的
// 状态分离，你并不清楚谁和谁有关系，哪个 State 给哪个组件引用
const [page, setPage] = useState(1);
const [type, setType] = useState("all");
const [data, setData] = useState([]);

setPage(1);
setType("all");
setData([]);
```

::: details 你可以看看这个实际代码，一定会觉得蛋疼了

初始化状态

```tsx
const [audit, setAudit] = useState("");
const [domain, setDomain] = useState<string | number>("");
const [note, setNote] = useState("");
const [trackingNumber, setTrackingNumber] = useState("");
const [trackingUrl, setTrackingUrl] = useState("");
```

修改状态

```tsx
// 这里面漏了一个 setAudit，你一眼能看出来吗？
const onShow = () => {
  setNote(record.t3_note);
  setDomain(record.to_t3_domain);
  setTrackingUrl(record.tracking_url);
  setTrackingNumber(record.tracking_number);
}
```

:::
