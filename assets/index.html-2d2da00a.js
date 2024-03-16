import{_ as a,o as e,c as t,a as s}from"./app-309077b0.js";const n={},i=s(`<h1 id="imagemagick" tabindex="-1"><a class="header-anchor" href="#imagemagick" aria-hidden="true">#</a> ImageMagick</h1><h2 id="image-tiling-effect" tabindex="-1"><a class="header-anchor" href="#image-tiling-effect" aria-hidden="true">#</a> Image tiling effect</h2><p>This is a command for ImageMagick, a software suite for image manipulation.</p><p>The command adds a watermark to an image called &quot;toes.png&quot; and saves the resulting image as &quot;snibtile.jpg&quot;. The watermark is created by using the &quot;label&quot; command to create a text label that says &quot;snibgo&quot; in blue with a font size of 20. The label is then rotated by -20 degrees and saved as a temporary image called &quot;TILE&quot;.</p><p>The command then uses the temporary image as a pattern to fill the entire input image with the watermark. This is done by using the &quot;-fill&quot; option to set the fill color to the temporary image, and the &quot;-draw&quot; option to fill the entire image with the pattern. The resulting image is saved as &quot;snibtile.jpg&quot;.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>convert <span class="token parameter variable">-background</span> None <span class="token parameter variable">-fill</span> Blue  <span class="token parameter variable">-pointsize</span> <span class="token number">20</span> label:snibgo  <span class="token parameter variable">-rotate</span> <span class="token parameter variable">-20</span> +repage  +write mpr:TILE +delete toes.png <span class="token parameter variable">-alpha</span> <span class="token builtin class-name">set</span> ^
  <span class="token punctuation">(</span> +clone ^
    <span class="token parameter variable">-fill</span> mpr:TILE <span class="token parameter variable">-draw</span> <span class="token string">&quot;color 0,0 reset&quot;</span> ^
  <span class="token punctuation">)</span> ^
  <span class="token parameter variable">-composite</span> ^
  snibtile.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="convert-command-to-add-watermark" tabindex="-1"><a class="header-anchor" href="#convert-command-to-add-watermark" aria-hidden="true">#</a> Convert command to add watermark</h2><p>This is a Bash script that adds a watermark to an input image using the ImageMagick command-line tool. The script takes two arguments: a text string for the watermark and the file path of the input image.</p><p>Here is a breakdown of what each line of the script does:</p><ol><li><p><code>#!/bin/bash</code>: This is the shebang line that specifies that the script should be run using Bash.</p></li><li><p><code>convert -background none -fill &quot;rgba(128,128,128,0.25)&quot; -font Arial -rotate -30 -pointsize 14 label:&quot;$1&quot; /Users/xxx/Desktop/watermark.png</code>: This command generates a PNG image with the specified text string as a watermark. It uses the <code>convert</code> command from ImageMagick to create the image with the following options:</p><ul><li><p><code>-background none</code>: Sets the background to transparent.</p></li><li><p><code>-fill &quot;rgba(128,128,128,0.25)&quot;</code>: Sets the fill color to a semi-transparent gray.</p></li><li><p><code>-font Arial</code>: Sets the font to Arial.</p></li><li><p><code>-rotate -30</code>: Rotates the text by 30 degrees clockwise.</p></li><li><p><code>-pointsize 14</code>: Sets the font size to 14 points.</p></li><li><p><code>label:&quot;$1&quot;</code>: Specifies the text string for the watermark.</p></li><li><p><code>/Users/xxx/Desktop/watermark.png</code>: Specifies the output file path for the watermark image.</p></li></ul></li><li><p><code>convert $2 -alpha on \\( +clone -tile /Users/xxx/Desktop/watermark.png -draw &quot;color 0,0 reset&quot; \\) -composite test.png</code>: This command takes the input image and adds the watermark image to it. It uses</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash # usage: ./watermark.sh &quot;your text&quot; input_image_path.png </span>
convert <span class="token parameter variable">-background</span> none <span class="token parameter variable">-fill</span> <span class="token string">&quot;rgba(128,128,128,0.25)&quot;</span> <span class="token parameter variable">-font</span> Arial <span class="token parameter variable">-rotate</span> <span class="token parameter variable">-30</span> <span class="token parameter variable">-pointsize</span> <span class="token number">14</span> label:<span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> /Users/xxx/Desktop/watermark.png 
convert <span class="token variable">$2</span> <span class="token parameter variable">-alpha</span> on <span class="token punctuation">\\</span><span class="token punctuation">(</span> +clone <span class="token parameter variable">-tile</span> /Users/xxx/Desktop/watermark.png <span class="token parameter variable">-draw</span> <span class="token string">&quot;color 0,0 reset&quot;</span> <span class="token punctuation">\\</span><span class="token punctuation">)</span> <span class="token parameter variable">-composite</span> test.png <span class="token function">rm</span> /Users/xxx/Desktop/watermark.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[i];function r(l,p){return e(),t("div",null,o)}const d=a(n,[["render",r],["__file","index.html.vue"]]);export{d as default};