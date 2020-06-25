---
layout: single
title: Get the first image from each post in WordPress
description: "WordPress: Get the first image from a post."
author_profile: false
excerpt: "How to get the first image from a post or gallery post in WordPress."
modified: 2017-12-18
category:
 - WordPress
tag:
- PHP
- code snippet
comments: true
header:
  image:
  caption:
---

In this post, let's write a custom WordPress function `get_first_image` to display the first image from all the posts. We can get this to work with pagination, on a static home page or an independent page. With this method we can retrieve all the first images in each post, including gallery posts. We can also get a default picture for post with no image attached.

Here is my function snippet:

{% highlight html %}
function get_first_image() {
	$post  = get_post();
	$first_img = '';
	preg_match_all( '/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', do_shortcode( $post->post_content, 'gallery' ), $matches );
	  $first_img = isset( $matches[1][0] ) ? $matches[1][0] : null;

	if ( empty( $first_img ) ) {
			return get_template_directory_uri() . '/assets/images/empty.png'; // path to default image.
	}
}
  {% endhighlight %}

You can use it in ```function.php```:

<script src="https://gist.github.com/SilentComics/be47b82859e2f958fc57ee412d4a27b6.js"></script>

Now all we need to do is call the function in the page template like so:
```echo esc_html( get_first_image() );``` and style the images or thumbnails.

Please leave a comment below if you know a better way or another method.


Reference: [https://css-tricks.com/snippets/wordpress/get-the-first-image-from-a-post/](https://css-tricks.com/snippets/wordpress/get-the-first-image-from-a-post/)
{: .notice}
