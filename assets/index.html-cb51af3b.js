import{_ as n,o as a,c as s,a as e}from"./app-dbcd2ce6.js";const t={},p=e(`<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1><h2 id="batch-replace-dom-but-keep-event" tabindex="-1"><a class="header-anchor" href="#batch-replace-dom-but-keep-event" aria-hidden="true">#</a> Batch replace dom but keep event</h2><p>node节点的批量替换并保留事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> h3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;h3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
h3<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>h3<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>node<span class="token punctuation">.</span>childNodes<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
node<span class="token punctuation">.</span><span class="token function">replaceWidth</span><span class="token punctuation">(</span>h3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,u){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","index.html.vue"]]);export{d as default};