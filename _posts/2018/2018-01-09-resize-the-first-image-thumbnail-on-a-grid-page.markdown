---
layout: single
title: Create a grid page with the first image from each post in WordPress
description: >-
  Create a grid page with thumbnails from the first image from each post in
  WordPress
excerpt: >-
  WordPress: how to create a grid page with thumbnails from the first image from
  each post, and resize images dynamically.
author: Hoa
author_profile: false
modified: 2019-11-06
category:
  - WordPress
tag:
  - php
  - code snippet
comments: true
header:
  image: /images/Strip_theme_dashboard_front-page_columns.png
  og_image: /images/fatal-trope-cover.jpg
  caption: WordPress dashboard — picking front page columns number
---

In a [previous post](/wordpress/get-the-first-image-from-a-post/ "Get the first image from each post in WordPress") we used a custom WordPress function `get_first_image` to display the first image from all the existing posts within a particular taxonomy (or category) on a given page. This works with pagination, on a static home page or an independent archive page. With this method, we can retrieve all the first images from each post, including galleries. But each thumbnail is now linking to a post image without altering its size. Since having large images is unnecessary, let’s further implement these thumbnails with dynamic resizing. We should spare server resources for users, especially on mobile. Also, if we [use a custom taxonomy](/wordpress/previous-and-next-post-in-same-custom-taxonomy/ "Previous and next post link in the same custom taxonomy"), say “story” for the “comic” custom post type, there is no default category to fall within, so we need to take care of that.

<figure>
	<img src="/images/Strip_four-columns.png">
	<figcaption>Strip theme four columns home page sample</figcaption>
</figure>

<figure>
	<img src="/images/Strip_three-columns.png">
	<figcaption>Three columns</figcaption>
</figure>

<figure>
	<img src="/images/Strip_two-columns.png">
	<figcaption>Two columns</figcaption>
</figure>

<script src="https://gist.github.com/SilentComics/0a7ea47942eb759dbb48eac2b7be1bbc.js"></script>

Now we can style the post columns in CSS:

{% highlight css %}
/* Two columns grid */
.two-columns { width: 100%; margin: 1.2em 0; }
.two-columns:before, .two-columns:after { content: " "; display: table; }
.two-columns:after { clear: both; }
.two-column { float: left; margin: 0 3% 1em 0; width: 48.5%; }
.two-column:nth-child(2n) { margin-right: 0; }
.two-column:nth-child(2n+1) { margin-left: 0; clear: left; }
.two-column img { width: 100%; }

@media screen and (max-width: 552px) {
.two-column  { margin: 0; width: 100%; }
.two-column :nth-child(1n) { margin-right: 0; }
.two-column :nth-child(1n+1) { margin-left: 0; clear: left; }
.series-title { font-size: 10px; font-weight: 100; line-height: 1.2; } }

/* Three columns grid */
.three-columns { width: 100%; margin: 0.6em 0 0 0; }
.three-columns:before, .three-columns:after { content: " "; display: table; }
.three-columns:after { clear: both; }
.three-column { float: left; margin: 0 2% 0.75em 0; width: 32%; }
.three-column:nth-child(3n) { margin-right: 0; }
.three-column:nth-child(3n+1) { margin-left: 0; clear: left; }
.three-column img { width: 100%; }

@media screen and (max-width: 744px) {
.three-column  { width: 100%; }
.three-column :nth-child(2n) { margin-right: 0; }
.three-column :nth-child(2n+1) { margin-left: 0; clear: left; } }

@media screen and (max-width: 456px) {
.three-column  { margin: 0; width: 100%; }
.three-column :nth-child(1n) { margin-right: 0; }
.three-column :nth-child(1n+1) { margin-left: 0; clear: left; }
.series-title { font-size: 10px; font-weight: 100; line-height: 1.2; } }

/* Four columns grid */
.four-columns { width: 100%; margin: 0.6em 0 0 0;  }
.four-columns:before, .four-columns:after { content: " "; display: table; }
.four-columns:after { clear: both; }
.four-column { float: left; margin: 0 1.333% 1.2rem 0; width: 24%; }
.four-column:nth-child(4n) { margin-right: 0; }
.four-column:nth-child(4n+1) { margin-left: 0; clear: left; }
.four-column img { width: 100%;
 }
{% endhighlight %}

Last we call the thumbnails into a specific template — here the two columns option:

{% highlight php %}
<?php
/**
 * Template Name: Two columns page
 *
 * The template for displaying comic series archives pages.
 * Show the first image of each comic post on a two columns grid.
 *
 * @package WordPress
 * @subpackage Strip
 */

get_header(); ?>

<section id="primary"
		<div class="content" role="main">
		<div class="wrap">
			<header class="entry-header">
				<h3 class="taxonomy-description">
					<?php printf( '<a href="%s" class="post-parent-title">%s</a>',
						esc_url( get_post_type_archive_link( 'comic' ) ),
						esc_html( get_the_title() )
					); ?>
					</a></h3>
				<h1 class="page-title"><?php the_title(); ?></h1>
			</header>

		<div class="two-columns">

			<?php
			// get the correct paged figure on a Custom Page That Isn’t Static Home Page.
			$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1; ?>


		<?php

					// Call and run loop in descending order.
					$loop = new WP_Query( array(
						'post_type'			     => 'comic',
						'story'              => '', // add story term here if you want this template to only archive a specific story.
						'posts_per_page'     => 6, // changes default Blog pages number "reading settings" set in dashboard.
						'paged'              => $paged, // you absolutely need this.
						'orderby'            => 'title', // order by title or date.
						'order'              => 'ASC',
					) );

					// Start the loop.
					if ( $loop->have_posts() ) :
						while ( $loop->have_posts() ) :
							$loop->the_post();
			?>
			<div class="two-column">
				<a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php printf( esc_html__( 'Permanent Link to %s', 'strip' ),the_title_attribute( 'echo=0' ) ); ?>"></a>
				<?php if ( get_the_post_thumbnail() !== '' ) {

					echo '<a href="';
					the_permalink();
					echo '" class="thumbnail-wrapper">';
					the_post_thumbnail();

					echo '</a>';

} else {

	echo '<a href="';
	the_permalink();
	echo '" class="thumbnail-wrapper">';
	echo '<img src="';
	echo esc_html( get_first_image( 'strip-medium', 'url' ) );
	echo '" alt="" />';
	echo '</a>';
} ?>

<h2 class="series-title"><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php printf( esc_html__( 'Permanent Link to %s', 'strip' ), the_title_attribute( 'echo=0' ) ); ?>"><?php the_title(); ?></a></h2>

			</div><!-- .column -->
			<?php endwhile; ?>
			</div><!-- .columns -->
		<?php
			wp_reset_postdata();
		?>

		<?php
				$big = 999999999; // need an unlikely integer.
				$translated = __( 'Page', 'strip' ); // supply translatable string.

				echo wp_kses_post( paginate_links( // Data validation: wp_kses_post see https://developer.wordpress.org/reference/functions/wp_kses_post/.
					array(
					'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
					'format' => '?paged=%#%',
					'current' => max( 1, get_query_var( 'paged', 1 ) ),
					'total' => $loop->max_num_pages,
					'before_page_number' => '<span class="screen-reader-text">' . $translated . ' </span>',
					'prev_text' => esc_html__( 'Previous', 'strip' ), // If you want to change the previous link text.
					'next_text' => esc_html__( 'Next', 'strip' ), // If you want to change the next link text.
					'type' => 'title', // How you want the return value to be formatted.
					'add_fragment' => '#result', // Your anchor.
				) ) );

		else :
			get_template_part( 'no-results', 'archive-comic' );
		endif; ?>

				</div><!-- .wrap -->
	</main><!-- #content -->
</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>

{% endhighlight %}

Do you know a better way or another method? Please leave a comment below.


[Function Reference: wp_set_object_terms](https://developer.wordpress.org/reference/functions/wp_set_object_terms/)
{: .notice}
