---
sidebar: auto
---

# CSS Effect

## Input cursor color

输入框光标颜色的设置

```css
.input {
  color: black;
  caret-color: red; 
  /*插入光标颜色，小程序真机表现无效，大概率是因为input在focus状态下表现为原生组件，样式对原生组件内部无效*/
}
```

## text underline cover

文字一半区域色块效果实现

```css
// recommand
span {
  text-decoration: underline #f005 .5em;
  text-underline-offset: -4px;
}
// or
span { box-shadow: inset 0 -0.6em 0 0 rgba(219, 42, 42, 0.5); }
// or
span { background: linear-gradient(rgba(255,0,0,.5),rgba(255,0,0,.5)) 0 bottom/100% .5em no-repeat; }
```

其中，下划线方法是最好的，为什么呢？因为下面两种方法都要求 span 元素必须是inline水平，如果设置为 display:block 或者display: inline-block ，则就会失效。而下划线方法不受元素的display计算值影响。


## use css make some contenteditable element not editable

可编辑元素有某个元素不可编辑

```css
.at {
   -webkit-user-modify: read-only;
}
```