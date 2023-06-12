---
sidebar: auto
---

# DOM

## Batch replace dom but keep event

node节点的批量替换并保留事件

```js
var h3 = document.createElement("h3");
h3.append.apply(h3, [...node.childNodes]);
node.replaceWidth(h3);
```

## Browser screen move smooth

平滑滚动定位的实现，Safari 目前已经支持

```js
ele.scrollIntoView({
  behavior: "smooth",
  block: "center"
});
```
