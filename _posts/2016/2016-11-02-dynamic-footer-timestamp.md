---
layout: single
title: "Dynamic WordPress footer timestamp."
description: "WordPress: add a dynamic date in your site's footer."
author: Hoa
author_profile: false
excerpt: "A PHP snippet to add a dynamic year timestamp into your WordPress footer."
modified: 2017-12-18
category:
  - WordPress
tag:
  - PHP
  - code snippet
comments: true
---
2017 is almost here. Time to update your site date and copyright settings. Here are a few lines of (WordPress standards compliant) code to add a dynamic timestamp in your ```footer.php``` and then forget all about it.

{% highlight php %}
<div class="site-info">
			&copy; <span class="site-name"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></span> <?php
			$from_year = 2015;
			$this_year = (int) date( 'Y' );
			echo esc_html( $from_year . (($from_year !== $this_year) ? '-' . $this_year : '') );?>
			<span class="sep"> | </span>
	<?php do_action( 'themeslug_credits' ); ?>
				<a href="<?php echo esc_url( __( 'http://your-link/', 'themeslug' ) ); ?>"><?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'themeslug' ), 'Name', 'Designer Name' ); ?></a>
		</div><!-- .site-info -->
	{% endhighlight %}

<script src="https://gist.github.com/SilentComics/6899bb8c9e10b21f4eb515eec97676fc.js"></script>

Note that variables like ```$from_year``` must be written in [snake_case](https://en.wikipedia.org/wiki/Snake_case) format
{: .notice}

### The output:

© [YourSite](http://yoursitename) 2015-2016 ┃ [Theme: Name by Designer Name](http://yourlink)
