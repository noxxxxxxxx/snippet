---
sidebar: auto
---

# Javascript

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
