---
layout: single
title: Previous and next post link in the same custom taxonomy
description: "WordPress: get the previous and next post link in the same custom taxonomy."
author: Hoa
author_profile: false
excerpt: "Previous and next post navigation links with custom post type and custom taxonomies in WordPress."
modified: 2017-12-18
category:
 - WordPress
tag:
 - Custom Post Type
 - get_adjacent_post
 - navigation
header:
  image:
  caption:
---
In WordPress, `get_adjacent_post()` doesn’t work with custom taxonomies as expected.
So `previous_post_link(‘%link’, ‘%title’, true)` and `next_post_link(‘%link’, ‘%title’, true)` won’t work as `$previous` and `$next` if you use a custom post type with a custom taxonomy. One workaround  is to use `get_adjacent_post()` with `WP_Query`.

{% highlight html %}
	// get_posts in same custom taxonomy
	$postlist_args = array(
	'posts_per_page'       => -1,
	'orderby'              => 'menu_order title',
	'order'                => 'ASC',
	'post_type'            => 'your_custom_post_type_name',
	'your_custom_taxonomy' => 'your_custom_taxonomy_term'
	);
	$postlist = get_posts( $postlist_args );

	// get ids of posts retrieved from get_posts
	$ids = array();
	foreach ($postlist as $thepost) {
	$ids[] = $thepost->ID;
	}

	// get and echo previous and next post in the same taxonomy        
	$thisindex = array_search($post->ID, $ids);
$previd = $ids[$thisindex-1];
$nextid = $ids[$thisindex+1];
if ( !empty($previd) ) {
echo '<a rel="prev" href="' . get_permalink($previd). '">previous</a>';
	}
	if ( !empty($nextid) ) {
	echo '<a rel="next" href="' . get_permalink($nextid). '">next</a>';
	}{% endhighlight %}

Variation

{% highlight ruby %}
	// get_posts in same custom taxonomy

	$posttype = get_query_var(post_type);
	$taxonomies=get_taxonomies(
	array(
	object_type => array ($posttype)
	),
	'names'
	);
		foreach ($taxonomies as $taxonomy ) { //Assigning all tax names of the posttype to an array
	$taxnames[] = $taxonomy;
	}

	$terms = get_the_terms( $post->ID, $taxnames[0] );
		foreach ( $terms as $term ) { //Assigning tax terms of current post to an array
	$taxterms[] = $term->name;
	}

	$postlist_args = array(
	'posts_per_page' => -1,
	'orderby' => 'date',
	'order' => 'DSC',
	'post_type' => $posttype,
	'tax_query' => array(
	array(
	'taxonomy' => $taxnames[0],
	'field' => 'name',
	'terms' => $taxterms
	)
	)
	);
	$postlist = get_posts( $postlist_args );

	// get ids of posts retrieved from get_posts
	$ids = array();
	foreach ($postlist as $thepost) {
	$ids[] = $thepost->ID;
	}

	// get and echo previous and next post in the same taxonomy        
	$thisindex = array_search($post->ID, $ids);
	$previd = $ids[$thisindex-1];
	$nextid = $ids[$thisindex+1];
	if ( !empty($previd) ) {
	echo '<a rel="prev" href="' . get_permalink($previd). '">previous</a>';
	}
	if ( !empty($nextid) ) {
	echo '<a rel="next" href="' . get_permalink($nextid). '">next</a>';
	}
{% endhighlight %}

However, if you get an “undefined offset errors” with `WP_Debug` enabled, replace

{% highlight ruby %}
		$thisindex = array_search($post->ID, $ids);
	$previd = $ids[$thisindex-1];
	$nextid = $ids[$thisindex+1];
	if ( !empty($previd) ) {
	…
	}
{% endhighlight %}

with

{% highlight ruby %}
	if ( $thisindex != 0 ) { $previd = $ids[$thisindex-1]; echo '<a rel="prev" href="' . get_permalink($previd). '" rel="nofollow">previous</a>';
	if ( $thisindex != count($ids)-1 ) { $nextid = $ids[$thisindex+1]; echo '<a rel="next" href="' . get_permalink($nextid). '" rel="nofollow">next</a>';
{% endhighlight %}

Implementation in the theme:

{% highlight ruby %}
	// get_posts (comics) in same custom taxonomy
	$story = wp_get_post_terms( $post->ID, 'story' );
	$story_slug = $story[0]->slug;

     $story_args = array(
    'posts_per_page'  => -1,
    'orderby'         => 'menu_order title',
    'order'           => 'ASC',
    'post_type'       => 'comic',
    'tax_query' => array(
	'relation' => 'AND’,
	array(
	'taxonomy' => 'story',
	'field' => 'slug',
	'terms' => $story_slug ) ) )
    ;
     $story_args = get_posts( $story_args );

    // get ids of posts retrieved from get_posts
    $ids = array();
    foreach ($story_args as $thepost) {
     $ids[] = $thepost->ID;
     }

    // get and echo previous and next post in the same taxonomy           
	$thisindex = array_search($post->ID, $ids);

	if ( $thisindex != 0 ) { $previd = $ids[$thisindex-1]; echo '<a rel="prev" href="' . get_permalink($previd). '" rel="nofollow">previous</a>';

	if ( $thisindex != count($ids)-1 ) { $nextid = $ids[$thisindex+1]; echo '<a rel="next" href="' . get_permalink($nextid). '" rel="nofollow">next</a>';
{% endhighlight %}

Which will get the previous and next comic links in the same term, under the custom taxonomy “story”. Say we want to have a comic story called “Entropy”, it will sort all “entropy” stories within the same loop. Another benefit is the url will read as a neat *http://siteURL/story/entropy/*

If you know a better way or another method, please leave a comment below.

This might not be the simplest way, but at least it does not use filters such as `get_{$adjacent}_post_join` and is faster since it no longer needs to build its own SQL to work. Follow this ticket for updates on this issue in WordPress core — [https://core.trac.wordpress.org/ticket/26937](https://core.trac.wordpress.org/ticket/26937)
{: .notice}
