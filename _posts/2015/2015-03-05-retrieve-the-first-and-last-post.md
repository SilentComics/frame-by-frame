---
layout: single
title: Retrieve the first and last post in WordPress
description: "A simple way to get the first and last comic posts links in WordPress."
author: Hoa
author_profile: false
excerpt: "WordPress code snippets for Webcomic navigation — a simple way to get the first and last comic posts links."
modified: 2018-01-23
category:
 - WordPress
tag:
 - Custom Post Type
 - PHP
 - code snippet
comments: true
header:
  image: images/webcomic—navigation-bar.png
  caption: "Detail — WIP WordPress theme screenshot"
  creditlink: http://silent-comics.com
---

The simplest webcomics navigation could work just as the WordPress default post navigation does. It would just show links to the previous and to the next comic. However, webcomics often have additional navigation links to the **first**, **last**, **current** or **latest** comic. Sometimes a **random** button link is added. Most webcomics have a similar setup, due to lack of choice in themes and plugins, but also because it makes sense to navigate a story that way. It tries to replicate the physical book attributes. Another usual setting on the web is for comics episodes to show up in reverse chronology.  Usually, the latest episode, page or strip shows first on the homepage. That is the default WordPress blog post structure as well, but you might want to change that.

## Retrieve the first and last comic posts
Anyway, to design a navigation bar for comics or webcomics in WordPress, you can build on existing variables, such as `$first` and `$next`. Assuming you have a “comic” custom post type in `function.php`, this code will retrieve the first and last comic post.

{% highlight html %}
	/**
	* Get the first and latest post link for CPT comic
	*/
	/**
	function first_comic_post() {

	// Query the database for the oldest post
	$first_comic = new WP_Query( array(
	'post_type' => 'comic',
	'post_per_page' =>1,
	'order'   => 'ASC',
	)
	);

	if ($first_comic->have_posts()) {

    $first_comic->the_post();
    $first_url=get_permalink();
    echo $first_url;
	}      

	wp_reset_postdata();
	}
	/*
	for latest post link
	*/

	/**
	function latest_comic_post( $query ) {

	// Query the database for the most recent post
	$last_comic = new WP_Query( array(
	'post_type' => 'comic',
	'showposts'=>1
	)    
	);
	if ($last_comic->have_posts()) {

    $last_comic->the_post();
    $latest_url=get_permalink();
    echo $latest_url;
	}

	wp_reset_postdata();
	}{% endhighlight %}

  This method works fine for a single story but still needs improvement to sort comics by categories and enable series.
