# React 编码规范

JavaScript / TypeScript 写法，和本指南中 JavaScript 中的部分基本吻合。这里主要说下 React JSX 语法下的一些规范。

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

## 状态定义

以下部分，仅适用于 React 和类似用法（Preact / SolidJS）的框架。

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
