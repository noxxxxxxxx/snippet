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
