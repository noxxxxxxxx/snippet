---
sidebar: auto
---

# Javascript

## get month end Day, how many days in a specific month

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


## Audio

Play audio without `<audio>`

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

## convert size in bytes to KB MB GB

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

```js
function separate (num) {
    const reg = /(?=(\B\d{3})+$)/g;
    return String(num).replace(reg, ',');
}

seperate(111111)  // 111,111
```

## Chinese Money format(人民币 分->元 转换)

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
