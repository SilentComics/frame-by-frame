---
layout: single
title: Strip, a WordPress theme for webcomics
description: "Release: Strip, a WordPress theme designed for SIlENT COMICS."
author: Hoa
author_profile: true
excerpt: "Releasing Strip, a WordPress theme designed for SIlENT COMICS."
photoswipe: true
modified: 2019-10-15
category:
 - WordPress
tag:
 - Strip
 - webcomics
comments: true
header:
  image: /images/silentcomics_WP_header.jpg
  caption: SILENT COMICS — Strip WIP theme screenshot
---

## Lateral Thinking with Withered Technology
If you want to start a web comic, and self-host it, you will need a content management system to publish and manage all the comics episodes. There you have few options and WordPress is often the default solution. After testing a few [comics plugins](/webcomics-solutions-for-WordPress/) for WordPress, I felt the need for something simpler to use. Customization is fine, but I’d rather have less options if more specific ones. So I tried to write a custom made theme for WordPress, at first only for the sake of learning. The result is *Strip*, a theme designed for [https://silent-comics.com](https://silent-comics.com), released on GNU General Public License.

![Comic post with three columns gallery](CS_gridless.png)
<figcaption>Static home page with four column sample</figcaption>

My initial attempt, built with [Bones](http://themble.com/bones/ "Bones - WordPress development theme by Eddie Machado"), was an opportunity to learn [Less CSS](http://lesscss.org) but didn't go very far. The present theme is based on [_s](http://underscores.me “_s”), and also borrows from [Ryu](http://theme.wordpress.com/themes/ryu/ "Ryu - WordPress Theme"). This is the [*learning by doing*](/learning/by-doing/) side of the project for me. Suggestions from actual developers, users and comics lovers are welcome @ hoa // at // silent-comics.com
{: .notice}

## Theme Focus
Strip is a theme to showcase and manage online comics with the self-hosted version of [WordPress](https://wordpress.org). Easy to use (assuming you are familiar with WordPress), distraction free and responsive. Designed for large images, galleries and continuous stories. Optimized for full screen mode on desktop computers, mobile and tablets. Its main function is a comic post format with basic navigation for web comics. It can display comics in ascending or descending order (scroll) or one panel at a time, as a WP gallery (card). Following this logic, each story can read either panel by panel or page by page. The theme will handle different series or one-offs, sorted under the custom taxonomy “story”. A comics post without a category assigned will default to “draft”. Blog features are: one column with post-formats support. Non obtrusive commenting (toggle on & off). Four columns footer widget and no sidebars.

## Features:
Simple design, custom posts format for comics, no sidebar, wide images and fullscreen videos. Custom login page. Body text set in [Fenix](http://tipotype.com/fenix/), with headings in Futura.

![Comic post with three columns gallery](3-columns-comics-gallery.png)
<figcaption>Comic post with three columns gallery</figcaption>


## Installation
**Few words of warning** This theme contains functions that are, as WordPress puts it, "plugin territory". At the time of writing, the theme doesn't comply with WordPress.org requirements of separation of presentation and content.
To be specific, two functions, ```register_post_type()``` and ```register_taxonomy()``` should go in a plugin to comply with WordPress guidelines.
These enable "comics", and sorting through different series or "stories".
In effect, this creates an involuntary lock-in effect.
This means you would lose access to your (comics) data if you used this theme and then switched to another theme.
The data would still exist but you wouldn’t be able to see it.
That is an unwanted consequence of sharing a theme designed for a specific project.
**Separation of presentation and content** is a sound design practice that prevents you from being locked-in by a theme. Ideally, one should write a specific plugin to make the theme content-independent. This was my initial plan, but plugin development for WordPress is tedious, and the basic theme functions are easy to replicate with a static solution like Jekyll. Again, for the record, don't use this theme on your live site unless you are prepared to rebuild your site from scratch if you change your WordPress theme or CMS altogether.Also, please bear in mind that I'm not a developer. You are more than welcome to [review and contribute](https://github.com/SilentComics/Strip) to this theme. 👍
{: .notice}

TL;DR: This theme should not be used on your live site!

<div markdown="0"><a href="https://github.com/SilentComics/archive/master.zip" class="btn btn--light align-right">WIP Strip Theme — Download from GitHub</a></div>

1. Download [Strip](https://github.com/SilentComics/archive/master.zip) theme

2. Upload *Strip* directory into your WordPress installation’s theme folder (wp-content/themes).

3. In the WordPress backend, find and activate the theme under *Appearance* —> *Themes*.

## Setup

1. Create your menu and submenus. You can add a header image, a background image and change the background colour.

2. To use your own logo in svg format, you need to edit header.php. Replace the Base64 code found in assets/inline-logo.svg.php with your own logo. You can then call your logo in header.php replacing this line: `<?php get_template_part('assets/inline', 'logo.svg'); ?>`. Or remove that line if you don’t bother about a svg logo. You can also add a custom image logo from the customizer → site identity → logo, just use the site text title or both.

3. To publish a comic you can post under “comic” or “add a new comic”. Add a story name to sort comics by titles for multiple stories. Each series will live in a loop of its own. The default for unclassified comic stories is “draft”. There is an archive page template for all comic stories taxonomies: archive-comic.php. Since the theme has archive ordered by term, you can have any comics story archive on its own page. You need to write your own `taxonomy-$taxonomy-$term.php` for each story, after `taxonomy-story-draft.php`. e.g. if you created a story called “name”, you must add a file taxonomy-story-new.php. A “new” title link will show in the left hand side above each individual “name” comic posts. This will take you to page displaying all “name” comics in ascendant order. You can change the order in the template. The url will be http://yoururl/story/name

4. Post each comic episode as a single image or several images to form one comic. The theme allows for high resolution pictures. For large images, the recommended width is 1920px. The theme uses native WordPress galleries for galleries posted in comics and regular posts. Clicking on one image will take the user to a single image page. So a comics can read panel by panel. You can go to the next single panel by click or keyboard navigation (left and right arrows). For galleries, you can use an image slider plugin instead of the single image page template. These plugins work well with the theme: [RoyalSlider](http://dimsemenov.com/plugins/royal-slider/), [Photoswipe Masonry Gallery](https://wordpress.org/plugins/photoswipe-masonry/) or [Portfolio Slideshow](https://portfolioslideshow.com/).

## Managing comics
Once you create a comic story, or episode, you should assign it a “story” name. If you are familiar with WordPress, think about story as a *taxonomy* or category. This allows you to sort through and archive multiple stories. Archiving comics by story `$terms` is easy.  Once you have created your first comic posts, you can replace “name” in the template `taxonomy-story-name.php` by your story you’ll have to change  with your own title. For multiple stories, just clone this template with new details for each new story. You can also write a story description which will show on the specific story archive pages.

### Templates:
`archive.php`
This is the archive for your regular blog posts, unless you play with functions.php to change this behaviour, the comics won’t be archived in this page.

Comics specific archive templates:
`archive-comic.php`
This is where all your comics are archived in ascending order, by title. Pagination is set by default to the default posts per page set in WordPress dashboard > Settings > Reading `Blog pages show at most` number. You can change the `'posts_per_page'` number.

`archive-story.php`
This is a template you can use to archive your comics in a four columns grids.
Archived by title in descending order by default. You can add a story term (your story name) to `'story'`
You can change `'posts_per_page'` number, use `-1` to retrieve all the comics. Change `'DESC'` to `'ASC'` if you want the comics to appear in chronological order, starting from the first.   

![Archive page](comic_archive.png)
<figcaption>Archive page</figcaption>

`archive-titles.php`
This template call all comics episodes but will only display their titles, in ascending order. It’s basically a single row of titles, grouped by stories.

`taxonomy-story-draft.php`
The fallback for all uncategorized stories — no pagination.
You should have a name for each story.
Draft is a good place to store unpublished stories

`taxonomy-story-name.php`
This is a sample template. Replace “name” by your own story title and you are good to go.
It will archive all the comics stories falling under that “name”.

## A word about pagination.
Pagination in WordPress is a fragile thing. Some changes can result in unpredictable behavior. I have tried to comment the templates to avoid unexpected results i.e. breaking pagination or causing admin dashboard errors.

## Screen-shots

![WordPress logo option](WordPress_4.5_Logo_option.png)
<figcaption>Adding an image logo. From top: the sample Silent Comics SVG logo, the WP image logo, and the title, manageable from the customizer option</figcaption>

![Single comic post screenshot](Strip_comic_post.jpg)
<figcaption>Single comic post screenshot</figcaption>

![Custom login](login_02.png)
<figcaption>Custom login</figcaption>

![Custom login](login_03.png)
<figcaption>Custom login</figcaption>

![Dashboard with improved CPT for comics](silentcomic_dashboard_improved_CPT.png)
<figcaption>Dashboard with improved CPT for comics</figcaption>

![A comic page using WP native gallery, with two columns](2-columns-gallery_comic.png)
<figcaption>A comic page using WP native gallery, with two columns</figcaption>

![Single comic post with drop-down menu](Single_comic_post_drop_down_menu.png)
<figcaption>Single comic post with drop-down menu</figcaption>

![Single comic post with custom background color](Single_comic_post_custom_background.png)
<figcaption>Single comic post with custom background color</figcaption>

Keyboard navigation will take the user to the next or previous image in galleries.

![Single panel / image template with previous and next navigation](single_panel-image-view_02.png)
<figcaption>Single panel / image template with previous and next navigation</figcaption>

![RoyalSlider panel view — full screen image](RoyalSlider-Panel-view_01.png)
<figcaption>RoyalSlider panel view — full screen image</figcaption>

![RoyalSlider panel view — transition](RoyalSlider-Panel-view_transition.png)*RoyalSlider panel view — transition*

Archive comics showing each episode’s first image in a grid.

![Comics episodes visual archive](silentcomics_archive.png)
<figcaption>Comics episodes visual archive</figcaption>

You can use the customizer or dashboard to setup header image, custom logo, and footer widgets.

![Static home page with four column sample](CS_gridless.png)
<figcaption>Static home page with four column sample</figcaption>

![same layout viewd with Tachyons X-ray](CS_grid.png)
<figcaption>The same layout revised with Tachyons X-ray Chrome plugin overlay</figcaption>


![Customiser: custom logo option](customise-dashboard.jpg)
<figcaption>Customiser: custom logo option</figcaption>

## Known issues

- Theme-check: WordPress recommands placing custom post types in plugins, not in themes. Again since the theme uses ```register_taxonomy()``` and ```register_post_type()``` it doesn’t pass theme-check.

**WARNING:** The theme options should not be pseudo custom post types and save non-trivial user data. Non-design related functionality is not allowed ([WordPress.org’s Presentation VS Functionality](https://make.wordpress.org/themes/handbook/review/required/#presentation-vs-functionality))
As written above, this means some of your data won’t be accessible when you switch theme. Please don’t use this theme on any production site to avoid this!
{: .notice.danger}

- ~~Writing a plugin and releasing a simpler version of the theme should be the next step for this project.~~[^1]
- As far as comics editing and management capabilities go, the functions are basic. This is due to my limited coding ability, no question about it. But this is also in part intentional: the fewer features, the better.  
- Architecture: There might be a better way to sort through all the different comics. A matter of ability, choice and preference also. But  incremental improvement works wonder.

[^1]: Theme logo support allows you to add an image logo (png or jpeg) from the customizer, since WordPress 4.5.
[^2]: The integration of the RICG Responsive Images plugin within WordPress core improves this. (since version 4.4)
[^3]: This shouldn’t happen, thanks to [Flushing Rewrite on Activation](https://codex.wordpress.org/Function_Reference/register_post_type#Flushing_Rewrite_on_Activation)

[^1]: The webcomics plugin development is discontinued at the time of this revision. It makes much more sense to develop a theme for comics with static solutions like Jekyll instead. The WordPress theme works as it is, despite its flaws.

## To do list:
See: [Theme wiki on GitHub #to-do](https://github.com/SilentComics/Strip/wiki/To-Do)

## Theme review needed

Do you know how to improve this theme? Have you found a bug?

<div markdown="0"><a href="http://bit.ly/strip-theme" class="btn btn--success align-right">Download Silent Comics WP Theme from GitHub</a></div>

<a href="https://github.com/SilentComics/Strip" rel="me" title="WIP WP theme"><i class="fab fa-github-alt" aria-hidden="true"></i></a>

Please send your findings to hoa // @ // silent-comics.com or open a pull request on GitHub. Thank you.
{: .notice--info}

## Support this theme development and maintenance.

<a href="https://flattr.com/@SILENT-COMICS"><img src="/images/flattr-badge-large.png"/>

<div markdown="0"><a href="https://paypal.me/silentcomics" class="btn btn--secondary align-right"><i class="fab fa-paypal"></i> Support SILENT COMICS through PayPal</a></div>
