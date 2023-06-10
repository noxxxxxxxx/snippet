import{_ as a,o as e,c as s,a as n}from"./app-dbcd2ce6.js";const i={},l=n(`<h1 id="imagemagick" tabindex="-1"><a class="header-anchor" href="#imagemagick" aria-hidden="true">#</a> ImageMagick</h1><ul><li>使用蓝色填充颜色，大小为20，创建一个标签“snibgo”。</li><li>将标签旋转-20度，并重新组织页面。</li><li>将结果保存为名为&quot;TILE&quot;的中间图像。</li><li>删除原始图像，加载名为&quot;toes.png&quot;的新图像，并设置其透明度。</li><li>创建一个副本并将其填充为中间图像的颜色。</li><li>将填充的副本与原始图像进行合成。</li><li>将结果保存为名为&quot;snibtile.jpg&quot;的新图像。</li></ul><p>总体作用是将标签&quot;snibgo&quot;旋转并填充到原始图像的每个像素上，以创建一个平铺效果的新图像。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>convert <span class="token parameter variable">-background</span> None <span class="token parameter variable">-fill</span> Blue  <span class="token parameter variable">-pointsize</span> <span class="token number">20</span> label:snibgo  <span class="token parameter variable">-rotate</span> <span class="token parameter variable">-20</span> +repage  +write mpr:TILE +delete toes.png <span class="token parameter variable">-alpha</span> <span class="token builtin class-name">set</span> ^
  <span class="token punctuation">(</span> +clone ^
    <span class="token parameter variable">-fill</span> mpr:TILE <span class="token parameter variable">-draw</span> <span class="token string">&quot;color 0,0 reset&quot;</span> ^
  <span class="token punctuation">)</span> ^
  <span class="token parameter variable">-composite</span> ^
  snibtile.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function r(o,p){return e(),s("div",null,t)}const d=a(i,[["render",r],["__file","index.html.vue"]]);export{d as default};
