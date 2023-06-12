---
sidebar: auto
---

# ImageMagick

## Image tiling effect

This is a command for ImageMagick, a software suite for image manipulation. 

The command adds a watermark to an image called "toes.png" and saves the resulting image as "snibtile.jpg". The watermark is created by using the "label" command to create a text label that says "snibgo" in blue with a font size of 20. The label is then rotated by -20 degrees and saved as a temporary image called "TILE". 

The command then uses the temporary image as a pattern to fill the entire input image with the watermark. This is done by using the "-fill" option to set the fill color to the temporary image, and the "-draw" option to fill the entire image with the pattern. The resulting image is saved as "snibtile.jpg".

```shell
convert -background None -fill Blue  -pointsize 20 label:snibgo  -rotate -20 +repage  +write mpr:TILE +delete toes.png -alpha set ^
  ( +clone ^
    -fill mpr:TILE -draw "color 0,0 reset" ^
  ) ^
  -composite ^
  snibtile.jpg
```

## Convert command to add watermark

This is a Bash script that adds a watermark to an input image using the ImageMagick command-line tool. The script takes two arguments: a text string for the watermark and the file path of the input image. 

Here is a breakdown of what each line of the script does:

1. `#!/bin/bash`: This is the shebang line that specifies that the script should be run using Bash.

2. `convert -background none -fill "rgba(128,128,128,0.25)" -font Arial -rotate -30 -pointsize 14 label:"$1" /Users/xxx/Desktop/watermark.png`: This command generates a PNG image with the specified text string as a watermark. It uses the `convert` command from ImageMagick to create the image with the following options:

    - `-background none`: Sets the background to transparent.
    
    - `-fill "rgba(128,128,128,0.25)"`: Sets the fill color to a semi-transparent gray.
    
    - `-font Arial`: Sets the font to Arial.
    
    - `-rotate -30`: Rotates the text by 30 degrees clockwise.
    
    - `-pointsize 14`: Sets the font size to 14 points.
    
    - `label:"$1"`: Specifies the text string for the watermark.
    
    - `/Users/xxx/Desktop/watermark.png`: Specifies the output file path for the watermark image.

3. `convert $2 -alpha on \( +clone -tile /Users/xxx/Desktop/watermark.png -draw "color 0,0 reset" \) -composite test.png`: This command takes the input image and adds the watermark image to it. It uses

```shell
#!/bin/bash # usage: ./watermark.sh "your text" input_image_path.png 
convert -background none -fill "rgba(128,128,128,0.25)" -font Arial -rotate -30 -pointsize 14 label:"$1" /Users/xxx/Desktop/watermark.png 
convert $2 -alpha on \( +clone -tile /Users/xxx/Desktop/watermark.png -draw "color 0,0 reset" \) -composite test.png rm /Users/xxx/Desktop/watermark.png
```

