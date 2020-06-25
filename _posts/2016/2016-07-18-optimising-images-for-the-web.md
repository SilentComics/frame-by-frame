---
layout: single
title: Images optimisation tools
description: "Open source and proprietary image compression tools."
excerpt: "Optimising images for the Web, a list of open source and proprietary image compression tools."
author: Hoa
author_profile: false
modified: 2018-01-19
category:
 - tools
tag:
 - open source
 - images optimization
comments: true
header:
  image:
  caption:
---

There are a number of tools to optimise images for the web: starting with Adobe Photoshop and Fireworks. However you can achieve even better compression with these tools:

- [ImageOptim](https://imageoptim.com/) is free, open-source soft­ware that reduces images files sizes but preserve quality. It also removes metadata and its preferences allow for different levels of compression (lossless &/or lossy).

- [ImageAlpha](https://pngmini.com) (open source) reduces file sizes of 24-bit PNG files (including alpha transparency) by applying lossy compression and conversion to a more efficient PNG8+alpha format.

- [Guetzli](https://github.com/google/guetzli) is an open source JPEG encoder released by Google. Guetzli aims for excellent compression density at high visual quality.

- [JPEGmini](https://itunes.apple.com/us/app/jpegmini/id498944723) is a paid app that reduces image file size by up to 80% without compromising on quality.

- [TinyPNG](https://tinypng.com) is an online PNG and JPEG compression tool, with a Photoshop CC plugin to match.

## Automation!
To make images optimisation part of your automated build process[^1], you can combine three of these tools and automate with the command line:  

- [ImageOptim-CLI](http://jamiemason.github.io/ImageOptim-CLI/)

- [https://github.com/JamieMason/ImageOptim-CLI](https://github.com/JamieMason/ImageOptim-CLI)

## More tools

- [Optimage](http://getoptimage.com) Lossy (visually lossless) and lossless optimizations, compression

- [SQUASH](https://www.realmacsoftware.com/squash/) optimizes image file sizes, converts .jpegs from .psd files.

- [Let's Enhance](https://letsenhance.io/)[^2] goal is the opposite. It aims to make a photo or image more realistic by removing JPEG artifacts and blur.

[^2]: Let's Enhance is free for now but only works in the browser and require signup.


## References

✑ [Image Optimization](http://calendar.perfplanet.com/2016/image-optimization/) by Estelle Weyl explains which is the best image format for each browser.

✑ [https://images.guide](https://images.guide "Essential Image Optimization") Essential Image Optimization - an eBook by Addy Osmani.


[^1]: [https://www.smashingmagazine.com/2013/12/imageoptim-cli-batch-compression-tool/](https://www.smashingmagazine.com/2013/12/imageoptim-cli-batch-compression-tool/)
