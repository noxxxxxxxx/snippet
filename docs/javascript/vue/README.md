---
sidebar: auto
---

# Vue

## Dialog Component

```js
<template>
  <div class="dialog-container">
    <div
      :class="['dialog-mask', visible && 'fade-in', !showMask && 'hide-mask']"
      @click="closeMask"
    />
    <div
      class="dialog-content"
      @click.stop=""
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  props: {
    // 点击遮罩是否关闭
    // click mask close
    maskClose: {
      type: Boolean,
      default: true
    },
    // 是否展示遮罩层
    // control mask display
    showMask: {
      type: Boolean,
      default: true
    },
    disableScroll: {
      type: Boolean,
      default: false
    },
    callback: {
      type: Function,
      default: function () {}
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    const body = document.querySelector('body')
    if (body.append) {
      body.append(this.$el)
    } else {
      body.appendChild(this.$el)
    }
  },
  methods: {
    open () {
      this._disableScroll()
      this.visible = true
    },
    close () {
      this.visible = false
      document.documentElement.style.overflow = ''
      this.callback && this.callback()
    },
    _disableScroll () {
      if (this.disableScroll) document.documentElement.style.overflow = 'hidden'
    },
    closeMask () {
      if (!this.maskClose) return
      this.close()
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    box-sizing: border-box;
  }
  .dialog-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.19);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .dialog-content {
    visibility: hidden;
    min-height: 1rem;
    min-width: 1rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale(.7);
    transform-origin: center;
    opacity: 0;
    transition: all 0.3s;
  }

  .fade-in {
    visibility: visible;
    opacity: 1;
    & + .dialog-content {
      visibility: visible;
      transform-origin: center;
      transform: translate3d(-50%, -50%, 0) scale(1);
      opacity: 1;
    }
  }

  .hide-mask {
    visibility: hidden;
  }
</style>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/hjoker/embed/ZEQRzPY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hjoker/pen/ZEQRzPY">
  Untitled</a> by hjoker (<a href="https://codepen.io/hjoker">@hjoker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>