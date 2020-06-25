---
layout: single
title: "Tweaking the built-in WordPress gallery"
description: "WordPress: How to improve the built-in WP gallery."
excerpt: "How to improve the built-in WP gallery images navigation"
author: Hoa
author_profile: false
modified: 2018-01-14
comments: true
header:
  image:
  caption: "A panel from *Exile* by: [**Anh Hoa Si**](http://silent-comics.com)"
  creditlink: http://silent-comics.com
category:
  - WordPress
tag:
  - WP gallery
  - PHP
  - code snippet
---

A few simple changes can improve the built-in WordPress gallery behavior without JavaScript and without using a slider plugin:

Following is an example of ```image.php```:

{% highlight html %}
<?php
/**
 * The template for displaying image attachments
 *
 * @package WordPress
 * @subpackage Strip
 */

get_header();
$content_width = 1920;
?>
	<div id="primary" class="content-area image-attachment">
		<div id="content" class="site-content" role="main">

	<?php
	// Start the loop.
	while ( have_posts() ) :
		the_post(); ?>

			<article id="post-<?php the_ID(); ?>">
				<div class="wrap">

						<div class="entry-attachment">

<?php
					/**
					 * Filter the default strip image attachment size.
					 *
					 * @since strip 1.0
					 *
					 * @param string $image_size Image size. Default 'full'.
					 */
					$image_size = apply_filters( 'strip_attachment_size', 'full' );

					echo wp_get_attachment_image( get_the_ID(), $image_size );

					?>

			</div><!-- .entry-attachment -->

		<?php // image navigation. ?>
<nav role="navigation" id="image-navigation" class="image-navigation">

				<div class="previous"><?php previous_image_link( false, __( '<span class="meta-nav">&larr;</span> <span class="text-nav">Previous panel</span>', 'strip' ) ); ?></div>
				<div class="next"><?php next_image_link( false, __( '<span class="meta-nav">&rarr;</span> <span class="text-nav">Next panel</span>', 'strip' ) ); ?></div>

				<nav class="post-parent-title">
					<?php printf( '<a href="%s" class="post-parent-title">%s</a>',
						esc_url( get_permalink( $post->post_parent ) ),
						esc_html( get_the_title( $post->post_parent ) )
					); ?>
				</nav>
</nav><!-- #image-navigation --><!-- #image-navigation -->

		<?php if ( has_excerpt() ) : ?>
					<div class="entry-caption">
		<?php the_excerpt(); ?>
					</div><!-- .entry-caption -->
		<?php endif; ?>

					</div><!-- .entry-content -->
				</div><!-- .entry-wrap -->
			</article><!-- #post-## -->

			<?php
			// If comments are open or we have at least one comment, load up the comment template (disabled).
			// if ( comments_open() || '0' !== get_comments_number() ) {
			// comments_template();
			// }
			?>

		<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
{% endhighlight %}

Now we can navigate through images with keyboard arrows.

<figure class="half">
	<a href="/images/single_panel-image-view_01.png"><img src="/images/single_panel-image-view_01.png"></a>
	<a href="/images/single_panel-image-view_03.png"><img src="/images/single_panel-image-view_03.png"></a>
	<figcaption>i.e. Two images panels.</figcaption>
</figure>


## Limitations
However, you cannot reuse the same image in different posts since the parent link will direct you to the original post where that image appeared first.
This is explained in the [Codex](https://codex.wordpress.org/Gallery_Shortcode#Developers_-_Things_to_consider):

> The default expected behavior for a gallery that has no explicit IDs stated is to add all images that have the post as post parent assigned. In other words, add all images that were uploaded using the “Add media” button/link on this post edit screen. Keep in mind that this as well means that every attachment added to that post later on will be interpreted to be part of the gallery. No matter if it was displayed as plain attachment or not.

{% highlight html %}
	$attachments = get_children( array(
	'post_parent'    => $attr['id'],
	'post_status'    => 'inherit',
	'post_type'      => 'attachment',
	'post_mime_type' => 'image',
	'order'          => $attr['order'],
	'orderby'        => $attr['orderby'],
	) );
{% endhighlight %}

I also noticed that while testing, a comic post would display all the panels uploaded at the same time, including those that weren’t part of a given post.
Now that could create confusion if you were to change your images or changed and re uploaded panels at a different date.

> an attachment image is attached to its parent post and even has the parent post slug in its URL. This makes it tricky to really have the same attachment in more than one place.
— Samuel Wood ([OTTO on WordPress](http://ottopress.com))

Probably an edge case, but it is better to avoid re-using the same upload in different posts.

## Links

##### Otto on WordPress. "Photo Gallery Primer", May 25, 2011 [http://ottopress.com/2011/photo-gallery-primer/](http://ottopress.com/2011/photo-gallery-primer/)

##### [http://wordpress.stackexchange.com/questions/99460/get-children-wp-get-attachment-image?lq=1](http://wordpress.stackexchange.com/questions/99460/get-children-wp-get-attachment-image?lq=1)

##### [http://wordpress.stackexchange.com/questions/82970/gallery-inside-one-post](http://wordpress.stackexchange.com/questions/82970/gallery-inside-one-post)

##### [Smashing Magazine — Better Image Management With WordPress](https://www.smashingmagazine.com/2011/05/better-image-management-practices-with-wordpress/)

Notes: You can find the WP gallery shortcode in [wp-includes/media.php](https://core.trac.wordpress.org/browser/tags/4.2.2/src/wp-includes/media.php#L0).
{: .notice}
