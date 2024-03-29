---
sidebar: auto
---

# CSS Effect

## Input cursor color

```css
.input {
  color: black;
  caret-color: red; 
  /*插入光标颜色，小程序真机表现无效，大概率是因为input在focus状态下表现为原生组件，样式对原生组件内部无效*/
}
```

## text underline cover

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


## Some elements in the editable content are non-editable.

```css
.at {
   -webkit-user-modify: read-only;
}
```

## Custom font size for specific characters

![demo](./images/demo.png)

```css
<span class="price">100元</span>
请补全下面CSS语句中缺少的CSS属性，实现配图所示的效果（“元”的字号小了50%）。
@font-face {
    font-family: smallYuan;
    src: local('PingFang SC'),
       local("Microsoft Yahei");
    ______size-adjust______: 50%;
    unicode-range: U+5143;
}
.price {
    font-family: smallYuan;
    font-size: 24px;
    color: red;
}
```

## CSS implement a border with concave corners

<iframe height="300" style="width: 100%;" scrolling="no" title="四角凹陷边框实现" src="https://codepen.io/hjoker/embed/vYQOvbe?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/vYQOvbe">
  四角凹陷边框实现</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Implementation of a dash button

```css
button {
    width: 100%;
    height: 48px;
    background: linear-gradient(#000, #000) no-repeat center / 64px 2px;
}
```

## Web Animations API fade out

```text
Implement a fade-out effect on an element and keep its opacity at 0 for 300ms animation duration。
```

```js
eleImage.addEventListener('click', function () {
    this.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 300,
        fill: 'forwards'
    });
});
// or
eleImage.addEventListener('click', function () {
    this.animate({
        opacity: [1, 0]
    }, {
        duration: 300,
        fill: 'forwards'
    });
});
// or
var animation = new Animation([effect][, timeline]);
let keyframes = new KeyframeEffect(eleImage, [
  { opacity: 1},
  { opacity: 0}
], {
  duration: 300,
  fill: 'forwards'
});
let animation = new Animation(keyframes);
// click element
eleImage.addEventListener('click', function() {
  animation.play()
});
```

## A button group with dividers

<iframe height="300" style="width: 100%;" scrolling="no" title="带分割线的按钮组" src="https://codepen.io/hjoker/embed/yLQNweb?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/yLQNweb">
  带分割线的按钮组</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Middle dash on both sides of the text

<iframe height="300" style="width: 100%;" scrolling="no" title="文字两侧中横线" src="https://codepen.io/hjoker/embed/RwqPdKX?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/RwqPdKX">
  文字两侧中横线</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## H2 in each print page header

Given an HTML document with the following structure:

```html
<h1>Title</h1>
<p>Overview.</p>
<h2>Subheading 1</h2>
<p>Content.</p>
<h2>Subheading 2</h2>
<p>Content.</p>
<h2>Subheading 3</h2>
<p>Content.</p>
```

Write a complete CSS statement (including CSS selector) that ensures that when the current page is printed, all second-level headings start at the top of a new printed page. For example, "Subheading 1" would start at the top of page 2, "Subheading 2" would start at the top of page 3, and "Subheading 3" would start at the top of page 4.

```css
@media print {
  h2 {
    break-before: always;
    page-break-before: always;
  }
}
```

