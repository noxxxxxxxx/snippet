---
sidebar: auto
---

# Javascript

## Get month end Day, how many days in a specific month

获取给定月份的具体天数

```ts

function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

getMonthEndDay(2012, 10) 
// means 2012/10 has 31 days

```

## Remove duplicate letters

移除重复字符
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


## Audio

Play audio without `<audio>`

通过 `Audio` 对象播放音频

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

## Convert size in bytes to KB MB GB

存储单位转换

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

## Count down with deadline

倒计时

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

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="hjoker" data-slug-hash="eYJaoYR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="eYJaoYR">
  <span>See the Pen <a href="https://codepen.io/hjoker/pen/eYJaoYR">
  eYJaoYR</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Number format

千位分隔符

```js
function separate (num) {
    const reg = /(?=(\B\d{3})+$)/g;
    return String(num).replace(reg, ',');
}

seperate(111111)  // 111,111
```

## Chinese Money format

人民币 分->元 转换

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

## Number increase/decrease animation

数字变动动画效果

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

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="hjoker" data-slug-hash="qBNdyBB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="number increase/decrease animation">
  <span>See the Pen <a href="https://codepen.io/hjoker/pen/qBNdyBB">
  number increase/decrease animation</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


## Date format YYYY-MM-DD hh:mm:ss

格式化 年月日 时分秒

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

## Hex color to rgb color

16 进制颜色转变成 rgb 颜色

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

rgb 颜色转变成16 进制颜色

```js
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
```

## Email desensitize

邮箱脱敏

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

尺寸缩放

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

## Converting Date to time ago

xx天前

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

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NWYWYma" data-user="hjoker" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/hjoker/pen/NWYWYma">
  Converting Date to time ago</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


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