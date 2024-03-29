---
sidebar: auto
---

# Javascript

## Get the specific number of days for a given month

```ts

function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

getMonthEndDay(2012, 10) 
// means 2012/10 has 31 days

```

## Remove duplicate letters

```js
// ES6
// from https://stackoverflow.com/questions/35609731/remove-duplicate-in-a-string-javascript
function removeDuplicate (s) {
    return Array.from(new Set(s.split(''))).join('')
}

// use map
function removeDuplicate (s) {
    var arr = s.split('')

    var map = {}

    var len = arr.length
    for (let i = 0; i < len; i++) {
        if (!map.hasOwnProperty(arr[i])) map[arr[i]] = true
    }

    return Object.keys(map).join('');
}

removeDuplicate('你好你哈') // 你好哈
removeDuplicate('76jkkjs98d7') // 76jks98d
```

Related:

> - [LeetCode](https://leetcode.com/problems/remove-duplicate-letters/submissions/)


## Play audio using the `Audio` API

```js
function playAudio () {
    const instance = new Audio()
    instance.crossOrigin = '*'

    // when its ready it will auto play
    instance.oncanplaythrough = () => {
        instance.play()
    }

    instance.onended = () => {
        instance.pause()
    }

    // get duration time
    instance.onloadedmetadata = () => {
        const duration = (instance.duration).toFixed(0)
    }
    instance.src = src // your audio src
    instance.load()
}
```

Related:

> - [Merge or concat audio file](https://github.com/jackedgson/crunker)

## Storage unit conversion,convert size in bytes to KB MB GB

```js
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
```

Related:

> - [Correct way to convert size in bytes to KB, MB, GB in JavaScript](https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript)

## Countdown for a specified date

```js
function countDown () {
  var deadline = 1898098000 // give a unix timestamp
  var now = new Date().getTime()

  var result = ''

  setInterval(() => {
    var t = deadline - now
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((t % (1000 * 60)) / 1000)
    if (t < 0) {
    //   clearInterval()
      days = 0
      hours = 0
      minutes = 0
      seconds = 0
    }
    result = days + 'days' + hours + 'h' + minutes + 'm' + seconds + 's'
}, 1000)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/hjoker/embed/eYJaoYR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/eYJaoYR">
  Untitled</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Number thousand separator


```js
function seperate (num) {
    const reg = /(?!^)(?=(\d{3})+$)/g
    return String(num).replace(reg, ',');
}

seperate(111111)  // 111,111
```

## Convert Chinese yuan from cents to yuan

```js
// 分 -> 元
function regFenToYuan(fen, flag = true) {
    var num = fen
    num = fen * 0.01
    num += ''
    var reg = num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g
    num = num.replace(reg, '$1')
    num = toDecimal2(num, flag)
    return num
}
// 保留两位小数 equal toFixed(2)
function toDecimal2(x, flag = true) {
    var ff = parseFloat(x)
    if (isNaN(ff)) {
        return false
    }
    var f = Math.round(x * 100) / 100
    var s = f.toString()
    var rs = s.indexOf('.')
    if (rs < 0) {
        rs = s.length
        if (flag) {
            s += '.'
        }
    }
    if (flag) {
        while (s.length <= rs + 2) {
            s += '0'
        }
    }
    return s
}

regFenToYuan(134) // 1.34
regFenToYuan(1434) // 14.34
```

## Animated effect for numerical changes

```js
/**
 * quickly change number from A to B
 * @param from number
 * @param to number
 */
function animNumber(from, to) {
    const start = new Date().getTime()
    const loop = () => {
        setTimeout(() => {
            const now = (new Date().getTime()) - start
            const progress = now / 700
            const result = to > from ? Math.floor((to - from) * progress + from) : Math.floor(from - (from - to) * progress)
            const res = progress < 1 ? result : to
            if (res) {
                // update number
                console.log(res)
            }
            if (progress < 1) loop()
        }, 90)
    }
    loop()
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="number increase/decrease animation" src="https://codepen.io/hjoker/embed/qBNdyBB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/qBNdyBB">
  number increase/decrease animation</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Format date and time as year-month-day hour:minute:second

```js
  const date = new Date(time);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  // let hours = date.getHours();
  // let minutes = date.getMinutes();
  // let seconds = date.getSeconds();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  // hours = hours < 10 ? `0${hours}` : hours;
  // minutes = minutes < 10 ? `0${minutes}` : minutes;
  // seconds = seconds < 10 ? `0${seconds}` : seconds;
  ```

## Convert hexadecimal color to RGB color

```js
function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
```

## RGB color to HEX color

```js
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
```

## Email desensitize

```js
function desensitize (email: string) {
  const part = email.split('@');
  const prefix = part[0];
  const domain = '@' + part[1];
  return (
    prefix.charAt(0) + '******' + prefix.charAt(prefix.length - 1) + domain
  );
};
```

## Image resize (width and height)

```js
function resize (width: number, height: number) => {
  let ratio = 0;
  // change _width _height to your size
  const _width = 1280;
  const _height = 1920;
  if (width > _width) {
    ratio = width / _width;
    const scaleHeight = height / ratio;
    return { width: _width, height: Math.round(scaleHeight) };
  } else if (height > _height) {
    ratio = height / _height;
    const scaleWidth = width / ratio;
    return { width: Math.round(scaleWidth), height: _height };
  }
  return { width, height };
};
```

## Converting Date to xx day ago

```js
function formatDate = (input) => {
  const date = (input instanceof Date) ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('zh');
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Converting Date to time ago" src="https://codepen.io/hjoker/embed/NWYWYma?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/NWYWYma">
  Converting Date to time ago</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Keywords hightlight

```js
function highLight(str, keywords) {
  var re = new RegExp(keywords.join("|"),"gi");
  var res = str.replace(re, function(matched){
    return '<mark>' + matched + '</mark>';
  });
  return res;
}

const res = highLight('我是导演，我不比烂', ['我', '导']) 
```

## Refresh page triggered when returning from WeChat on iOS

```js
let isPageHide = false;
window.addEventListener('pageshow', function () {
  if (isPageHide) {
    window.location.reload();
  }
});
window.addEventListener('pagehide', function () {
  isPageHide = true;
});
```

## Simple JS regular expression replacement of Markdown syntax with HTML tags

```js
function parse(markdownText) {
	const htmlText = markdownText
		.replace(/\*\*([^*><]+)\*\*/gim, '<strong>$1</strong>')
		.replace(/\*([^*><]+)\*/gim, '<em>$1</em>')

	return htmlText.trim()
}

var str = '我是**加粗**，我是*倾斜*，好巧，我也是*倾斜*'
console.log(parse(str));
```

## Filtering of comment strings.

```js
const trimComment = function (str) {
  return str.replace(/\/\/[\w\W]+?(?:\n|$)/g, '').replace(/\/\*[\w\W]+?\*\//gm, '');
}
```

## Cursor is at the end of the rich text editing box

```html
<div id="input" contenteditable="true">我是内容内容<div>
此时执行 input.focus() 的方法，光标是在文字的最前面的，实现当输入框聚焦的时候，光标在文字的最后。
```

```js
input.focus()
// 创建range
const range = window.getSelection();
// range 选择obj下所有子内容
range.selectAllChildren(input);
//光标移至最后
range.collapseToEnd();
```

or

```js
const selection = document.getSelection();
const range = document.createRange();
range.setStartAfter(input.lastChild)
selection.removeAllRanges();
selection.addRange(range);
input.focus()
```

## Content type validation during drag and drop release.

```js
cantainer.addEventListener("dragover", function(event) {
    event.preventDefault();
});
cantainer.addEventListener('drop', function (event) {
    console.log(event.dataTransfer.items[0].type.startsWith('image'));
   event.preventDefault();
});
```

## Not left click event detect

use auxclick event

## JS combination

```js
/*
  全组合算法
  input [a,b,c,d,e]
  output [Array(5), Array(10), Array(10), Array(5), Array(1)]
  flatten output, 
  ['A', 'B', 'C', 'D', 'E']
  ['AB', 'AC', 'BC', 'AD', 'BD', 'CD', 'AE', 'BE', 'CE', 'DE']
  ['ABC', 'ABD', 'ACD', 'BCD', 'ABE', 'ACE', 'BCE', 'ADE', 'BDE', 'CDE']
  ['ABCD', 'ABCE', 'ABDE', 'ACDE', 'BCDE']
  ['ABCDE']
 */
const combination = (arr) => {
  const list = [];
  for (let i = 0; i < arr.length; i++) {
    list.push([]);
  }

  const l = Math.pow(2, arr.length) - 1;

  for (let i = 1; i <= l; i++) {
    const t = [];

    for (let s = i, k = 0; s > 0; s >>= 1, k++) {
      if ((s & 1) === 1) {
        t.push(arr[k]);
      }
    }

    list[t.length - 1].push([t]); // join 的分隔符可以自行约定
  }

  return list.flat(2); // flatten
};
```

## Simple version compare

```js
const checkVersion = (a: string, b: string) => {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }); // 0:= 1:a>b -1:b>a
}
```

## JS read local picture

```js
const readURL = (file) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = e => res(e.target.result);
    reader.onerror = e => rej(e);
    reader.readAsDataURL(file);
  });
};
```

## JS Random [min, max]

```js
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Simple check weekend

```js
function isWeekday(timestamp) {
  const day = new Date(timestamp).getDay()
  return day % 6 !== 0
}
```

## A method to reverse an array without changing the original array

```js
Array.prototype.toReverse = function () { 
  return this.slice(0).reverse() 
}
```

## Click to reload the image with an error

If an image fails to load, clicking on it triggers a reload. If the image loads successfully, no action is taken.


```js
img.addEventListener('click', function(){
  this.decode().catch(err => {
    this.src= this.src + '?t='+Date.now()
  })
})

// better
document.addEventListener('click', function (event) {
  var ele = event.target;
  if (ele.nodeName == 'IMG' && !ele.naturalWidth) {
    ele.src = ele.src;
  }
});
```

## Media queries - Real-time listening to browser window width

```js
const mql = window.matchMedia('(max-width: 640px)');
let isMobile = mql.matches;;
mql.onchange = () => {
  isMobile = mql.matches;
}
```

## Swap positions of DOM nodes

```js
function swspNode(A,B){
    if (A.contains(B) || B.contains(A)) {
        console.error('不能替换相互包含的节点')
        return
    }
    const temp = new Text('')
    A.after(temp)
    B.after(A)
    temp.after(B)
    temp.remove()
}
```

## Check if the browser supports Background Fetch API

```js
if ("BackgroundFetchManager" in self) {
  console.log("support")
}
```

## Check if a page is in focus

```js
document.hasFocus()
```

## Highlight search results

```js
const highLight = function (str, arr) {
  arr.forEach(key => {
    str = str.replaceAll(key, `<mark>${key}</mark>`);
  });
  return str;
}
```

## Check if the current browser supports the avif image format

```js
https://github.com/Kagami/avif.js/blob/master/avif.js

// Decode AVIF data using native browser's AV1 decoder.
function hasAv1Support() {
  const vid = document.createElement("video");
  return vid.canPlayType('video/mp4; codecs="av01.0.05M.08"') === "probably";
}
```

## Convert an invalid JSON string to an object

```js
let str = '{ opacity: 0.5, color: "black", mode:  "hide" }';
new Function('return ' + str)()
```

## Check if the default scrollbar of the current browser takes up width

```js
// 页面高度不足，无法准确验证
window.innerWidth - document.body.clientWidth

function getScrollbarWidth() {
    // 新建一个带有滚动条的DIV元素，再计算该元素offsetWidth和clientWidth的差值。
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};
```

## Check if a web component is defined using customElements.define('xx-xx')

```js
drop.matches(':defined')
```

## Synchronized scrolling of two containers

<iframe height="300" style="width: 100%;" scrolling="no" title="两侧容器同步滚动" src="https://codepen.io/hjoker/embed/poQJYPr?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/poQJYPr">
  两侧容器同步滚动</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Remove events from the DOM

```js
let clone = element.cloneNode(true);
element.after(clone);
element.remove();
for (let key in clone) {
  if (/^on/.test(key) && typeof clone[key] == 'function') {
    clone[key] = null;
  }
}
```