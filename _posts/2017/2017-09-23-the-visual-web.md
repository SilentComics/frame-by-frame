---
layout: single
title: "The visual web"
description: "Images and their growing importance on the web."
author: Hoa
author_profile: false
excerpt: "When it started, the web was just hypertext and links. Since then, a whole *visual web* has emerged."
modified: 2018-10-28
comments: true
header:
  image: /images/featured_visual-web.jpg
  og_image: /images/featured_visual-web.jpg
  caption: "photo credit: [**NASA**](https://unsplash.com/@nasa)"
  creditlink:
category:
  - design
tag:
  - web
  - visual
---

When it started, the web was just hypertext and links[^1]. When the first images appeared, they loaded super slow. Since then, a whole new *visual web* has emerged. Visual media is growing at an unprecedented rate. Social sites like Pinterest, Instagram, and Tumblr all favour pictures over text. Sites and apps designed for people just to look at things are making images more predominant on the web, if in appearance only. This is still an environment dominated by words[^2] even if images are growing in presence every day. Images are nice, but on the web, they come with a specific set of problems.

## Speed
To load fast on the web, images should be compressed as large images file will slow down sites. Here is a list of useful [image compression tools](/tools/optimising-images-for-the-web/). Tackling images on small screens can still be an issue for web designers. Mobile devices should not load unnecessary big images. A solution is serving resized images to preserve the intended original layout. A [`<picture element>`](http://arstechnica.com/information-technology/2014/09/how-a-new-html-element-will-make-the-web-faster/) aims to solve this—see also [Responsive Images in Practice](http://alistapart.com/article/responsive-images-in-practice).

## Managing images
There is a growing number of image management systems as well:

- [thumbor](http://thumbor.org) is an open-source smart on-demand image cropping, resizing and filters

- [grid](https://github.com/guardian/grid), The Guardian’s image management service, also open source.

- [imgx](http://www.imgix.com/imgix-js), a toolbox for responsive images.

## Images search and image recognition

As the use of images increases, search engines are getting better at images processing and management. Using image recognition coupled to search software, [TinEye](http://www.tineye.com "TinEye")for instance, reverses the search process. Instead of searching for keywords, you feed it with an image link or an uploaded one. It will tell you where that image is in use, and how many duplicates and variations it finds on the web. It lets illustrators, photographers, and designers track imitations or appropriation of their works. But the underlying technology implications and its potential development exceed that. Large corporations are becoming even more protective of their visual assets. With massive image licensing revenues at stake, the future looks bright for image search.

[Pinterest](https://www.pinterest.com "Pinterest") also uses image recognition for visual search, that includes object detection with a whole set of new use-cases. For instance, its application Lens lets you browse the site through your smartphone camera. Google also has a competing app—also called Lens. Visual discovery is serious.

## New image formats
To read more about upcoming format for storing digital images,
☞ See [https://images.guide/#choosing-an-image-format](https://images.guide/#choosing-an-image-format)

## Video and more
Photography, audio, video, illustration and graphics are taking over our online experience. Augmented and virtual reality are still in their infancy, but are developing fast. Nobody knows what's next but a large part of the web is now visual. The future web will likely involve more immersive experiences, including AR and VR.

## Further Reading

#### Footnotes

##### Jacob Kastrenakes, The Verge. "Google removes ‘view image’ button from search results to make pics harder to steal" February 15, 2018 [https://www.theverge.com/2018/2/15/17017864/google-removes-view-image-button-from-search-results](https://www.theverge.com/2018/2/15/17017864/google-removes-view-image-button-from-search-results)

##### The New York Times. "Welcome to the post-text future" February 9, 2018  [https://www.nytimes.com/interactive/2018/02/09/technology/the-rise-of-a-visual-internet.html](https://www.nytimes.com/interactive/2018/02/09/technology/the-rise-of-a-visual-internet.html)

##### Graydon Hoare. “Always bet on text” October 14, 2014. [http://graydon2.dreamwidth.org/193447.html](http://graydon2.dreamwidth.org/193447.html)


[^1]: See [the first website](http://info.cern.ch/hypertext/WWW/TheProject.html)

[^2]: Tim Caemodt, Kottke. “Facebook is wrong, text is deathless” (June 15 2016) [http://kottke.org/16/06/facebook-is-wrong-text-is-deathless](http://kottke.org/16/06/facebook-is-wrong-text-is-deathless)
