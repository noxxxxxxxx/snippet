---
sidebar: auto
---

# ImageMagick

- 使用蓝色填充颜色，大小为20，创建一个标签“snibgo”。
- 将标签旋转-20度，并重新组织页面。
- 将结果保存为名为"TILE"的中间图像。
- 删除原始图像，加载名为"toes.png"的新图像，并设置其透明度。
- 创建一个副本并将其填充为中间图像的颜色。
- 将填充的副本与原始图像进行合成。
- 将结果保存为名为"snibtile.jpg"的新图像。

总体作用是将标签"snibgo"旋转并填充到原始图像的每个像素上，以创建一个平铺效果的新图像。

```shell
convert -background None -fill Blue  -pointsize 20 label:snibgo  -rotate -20 +repage  +write mpr:TILE +delete toes.png -alpha set ^
  ( +clone ^
    -fill mpr:TILE -draw "color 0,0 reset" ^
  ) ^
  -composite ^
  snibtile.jpg
```
