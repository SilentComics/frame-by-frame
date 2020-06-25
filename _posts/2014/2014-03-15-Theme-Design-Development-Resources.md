---
layout: single
title: "WordPress Theme Design Resources"
description: "WordPress: Resources and links for theme development."
author: Hoa
author_profile: false
excerpt: "WordPress theme development, a growing list of resources and links."
modified: 2019-04-16
category:
  - WordPress
tag:
  - CMS
  - theme
comments: true
header:
  teaser: /images/WP_index.png
---

WordPress is by far the most popular content management system for websites[^1]. Even if you are new to code, there is plenty of documentation to get started. It makes sense to start with one of the most used open source platform[^2]. The large community of WordPress users and developers ensures that the project will keep moving forward. Plus, it is relatively easy to use and starter-friendly.

## Choosing a theme

Still, the profusion of themes and plugins available for WordPress can be confusing. Most themes, whether free or commercial, offer little guarantee about future updates. Yet when you chose a theme, code maintenance is an important consideration. Especially for a site that needs more than blogging. Finding the perfect match for a specific online project is difficult. Even more so if you are looking for functions specific to your project. A theme is an aesthetic choice: how it looks and feels. But each theme's own logic: how it works is more important. A theme's functions will affect what a site can do, but also its speed, security, and user convenience. Users, of course, include visitors, the site owner and the admin who will maintain the site. Just because something is convenient for you as a site admin doesn't mean it will help your users. A lot of themes have cool, complex functions built-in, it doesn’t mean they will suit your needs out of the box.

## Custom Themes

Once you found a good theme, you will likely want to make some adjustments. You can change pretty much everything. WordPress was build in a way that content is not design-dependent. Yet the more you customize your site, the less this is true. So chances are you'll want to change how your site looks, but also how it works. One way to modify an existing theme style is to write a mirror theme that lives in a subfolder within your parent theme. You can then change the CSS style in the so-called child-theme. That way you won't lose your modifications when the parent theme is updated. For minor cosmetic changes, using a child-theme is an option. But if you want something more, and for the sake of learning, you might as well write your own theme. Chances are it will suit your needs better. Tweaking a theme only to find afterward that it does not serve your site’s purpose is a poor option. Whichever way you chose, you might need a lot of edits in CSS, PHP, JavaScript, and HTML to suit your project. Below are some useful links to learn how to design a theme for WordPress.

[^1]: As of early 2019, WordPress powers over 33% of all websites that use various content management systems, according to [CMS usage statistics](http://w3techs.com/technologies/overview/content_management/all).

[^2]: A lot of people say WordPress was their [gateway drug of web development](http://www.smashingmagazine.com/2015/06/wordpress-custom-page-templates/).

***

## Start development on a local server
To start prototyping your website, theme or plugin, setting up a local server with a program like [MAMP](https://www.mamp.info/en/) will help. MAMP is a virtual server that emulates a hosting environment on your computer. That enables you to go through various design iterations and test a site offline.
This approach is better than working on a remote server, or on your live hosted site, where you don't want changes to appear until your design is ready[^3].

→ [A Local Test Server: XAMPP or MAMP](http://themeshaper.com/2012/10/24/wordpress-theme-development-tools-tutorial-2/ "WordPress Theme Development Tools") an article by Ian Stewart from ThemeShaper.

→ [Installing WordPress Locally on Your Mac With MAMP - WordPress Codex](http://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP "Installing WordPress Locally on Your Mac With MAMP")

[^3]: [Browsersync](https://www.browsersync.io "Browsersync") is an even better approach to modern development

## Modern WordPress Development
Use [Trellis](https://roots.io/trellis/), [Bedrock](https://roots.io/bedrock/) and [Sage](https://roots.io/sage/) in combination or separately.

## General WordPress resources:

### Documentation
Starting at the source, [the WP codex documentation](https://codex.wordpress.org/) and the newer [code reference](https://developer.wordpress.org/) are the most complete documentation you will find.
The [WordPress Codex - Theme Development](http://codex.wordpress.org/Theme_Development/ "WordPress - Theme Development") and [WordPress Codex - Using themes](http://codex.wordpress.org/Using_Themes/ "WordPress - Using themes") are good starting points.

### ThemeShaper articles
Automattic’s Theme Division writes plenty of useful articles on the ThemeShaper blog, beginning with [The ThemeShaper WordPress Theme Tutorial: 2ND EDITION](http://themeshaper.com/2012/10/22/the-themeshaper-wordpress-theme-tutorial-2nd-edition/). Beside [WordPress.org’s own support forum](https://wordpress.org/support/), [ThemeShaper Forums](http://forums.themeshaper.com) answer specific questions. The [official WordPress IRC channel](http://codex.wordpress.org/IRC) has a [live chat](http://webchat.freenode.net) help.

### WordPress StackExchange
[WordPress StackExchange](http://wordpress.stackexchange.com/) is a well curated Q&A site for WordPress developers and administrators.
[wpseek.com](http://wpseek.com/), is *a WordPress-centric search engine for developers and theme authors*.

### WordPress related go-to sites and blogs

→ [https://websitesetup.org][f195d94c] - free, step-by-step guide on how to create a website using WordPress, by Robert Mening.

  [f195d94c]: https://websitesetup.org "How to create a website with WordPress, by Robert Mening"

→ [https://www.youtube.com/watch?v=1ETN9H9DnSg][cffac719] - Video on how to make a website, by Robert Mening.

  [cffac719]: https://www.youtube.com/watch?v=1ETN9H9DnSg "Video on how to make a website for beginners, by Robert Mening"

→ If you are going to delve into how PHP works with WordPress, [http://docs.webingenia.com/wordpress/](http://docs.webingenia.com/wordpress/) is helpful.

→ Keep an eye on [QueryPost](http://queryposts.com/), *Better WordPress code reference*, by Rarst.

→ [Digging Into WordPress](https://digwp.com/) a site by Chris Coyier & Jeff Starr that also expands into a book.

## Learning Books
There is an excessive amount of books about WordPress. How do you know if they are any good and current, thus helpful? Here are just two, recent, well documented and comprehensive manuals to circle the topic. Both available as e-books and print copies.

✑ *[WordPress: The Missing Manual, 2nd Edition](http://shop.oreilly.com/product/0636920027508.do)* by Matthew MacDonald, O’Reilly Media, June 2014

This book details WordPress features, as a blogging platform, and goes on to slightly more advanced topics.  

✑ *[Building Web Apps with WordPress — WordPress as an Application Framework](http://shop.oreilly.com/product/0636920029380.do)* by Brian Messenlehner, Jason Coleman, O'Reilly Media, April 2014.

This book dives deeper into how you can build web apps on top of WordPress infrastructure. It gives you the keys to unleash a powerful content management system.

## Non Commercial Starter themes for WordPress
Starter themes or frameworks are great for the novice and developers alike, because they are time-saving. They are also ideal to learn because they are not stuffed with all the superficial stuff, so it is easier to understand. If you start from scratch, it’s good to piece things together to see how they work.

### underscores _s
I settled for **underscores or _s**, a starter theme by Automattic. It contains just the right amount of lean, commented, modern, HTML5 templates.

→ [underscores _s Repository on Github](https://github.com/Automattic/_s/ "underscores _s — Github repository")

→ To keep it simple, you can head over to [http://underscores.me](http://underscores.me) and generate your _s based theme.

☞ [Components](http://components.underscores.me) is an extension of underscores _s, a starter theme that includes reusable components tailored to different theme types.

Automattic retired Components in June 2017
{: .notice}

### Sage
[Sage](https://roots.io/sage/) is a WordPress starter theme with a modern development workflow, developed by [Roots](https://roots.io) (see above).

### Bones
[Bones - WordPress development theme](http://themble.com/bones/ "Bones - WordPress development theme by Eddie Machado") by **Eddie Machado** is a lean theme to start building upon, adding or removing functionalities as needed. Speed efficient with its mobile-first logic, the theme is updated on a regular basis, well commented. It’s great to start working with Sass.


### StartBox
[StartBox](https://github.com/WebDevStudios/StartBox), is a framework maintained by [WebDevStudios](http://webdevstudios.com)

#### Practical learning:

☞ [Theme Shaper tutorial](http://themeshaper.com/2012/10/22/the-themeshaper-wordpress-theme-tutorial-2nd-edition/), the accompanying *16 day lessons to build a theme from scratch with _S*:


#### Tutorials (Bones):
→ [Making a Theme With Bones: Getting Started](http://wp.tutsplus.com/tutorials/theme-development/making-a-theme-with-bones-getting-started/ "Making a Theme With Bones: Getting started")

→ [Making a Theme With Bones: Cleaning Up](http://wp.tutsplus.com/tutorials/theme-development/making-a-theme-with-bones-cleaning-up/ "Making a Theme With Bones: Cleaning Up")

→ [Making a Theme With Bones: Finishing Off](http://wp.tutsplus.com/tutorials/theme-development/making-a-theme-with-bones-finishing-off/ "Making a Theme With Bones: Finishing Off")


## Commercial frameworks for WP
→ [Genesis Framework](http://my.studiopress.com/themes/genesis/ "Genesis Framework")

## Learning from existing themes
All the free *WordPress.com* themes are hosted on [Automattic's SVN](https://wpcom-themes.svn.automattic.com). Here are a few minimalistic ones:

### Ryu
→ [Ryu WordPress Theme](http://theme.wordpress.com/themes/ryu/ "Ryu - WordPress Theme") by [Takashi Irie](http://takashiirie.com)

This theme looks nice and simple. Since it is based on _s, the learning curve from underscores was a logical step. It uses the *[Frameless Grid](http://framelessgrid.com "Frameless Grid")* which seemed a good option to work with.

→ [Ryu Demo](http://ryudemo.wordpress.com "Ryu - WordPress Theme Demo")

→ [Behind the Design of the Ryu Theme](http://themeshaper.com/2013/04/09/behind-the-design-of-the-ryu-theme/)

### Twenty Seventeen
Each year the WordPress team collectively develop a theme. Following its development on GitHub is a good way to learn.

→ [twentyseventeen repo](https://github.com/WordPress/twentyseventeen)


## Plugins
Keep it simple, use as few plugins as possible. Using no or very few plugins will prevent speed, maintenance (upgrades!) and security issues. Plugins can be vulnerable to attacks, so update to the latest version whenever a vulnerability is found. When searching for a plugin, use common sense, look for things like code stability, maintenance rate and clear documentation. Good indicators are the number of downloads and favorable reviews a plugin received.

Here is a [list of WP plugins](/wordpress/a-list-of-useful-plugins/) that I use(d) and tested thoroughly.
{: .notice}


## PHP resources
PHP The Right Way [http://www.phptherightway.com](http://www.phptherightway.com)
[PHP The Right Way as an online ebook](https://leanpub.com/phptherightway/)

## Javascript resources
[You Don’t Know JS](https://github.com/getify/You-Dont-Know-JS), by Kyle Simpson, available as ebook.

## WordPress code snippets
- *CSS Tricks* has some useful [WordPress code snippets](https://css-tricks.com/snippets/wordpress/)
- [GenerateWP.com](http://generatewp.com) Help to generate custom quality code using the latest WordPress coding standards and API’s.

## More testing
If you tested a theme or plugin locally, it might still be a good idea to test it online. You could use a temporary site before deploying your website. Unlimited WordPress test installs are available at the weird domain [Poopy.life](http://poopy.life/), a service offered by [Soflyy](http://soflyy.com), the creators of [Oxygen](https://oxygenapp.com) and [WP All Import](http://www.wpallimport.com).

Use [poopy.life/create](http://poopy.life/create?url=/wp-admin/admin.php?page=sandbox) to start an install.

## Validation

## Speed and optimization for WordPress

→ A [good web host](/Finding-a-good-web-host/) is important.

→ Minify CSS, and compress images

→ Use web caching to reduce bandwidth usage, server load, and perceived lag (.htaccess methods, plugins…)

These articles are more specific to WordPress optimization:

→ [How To Speed Up WordPress](http://www.smashingmagazine.com/2014/06/25/how-to-speed-up-your-wordpress-website/)

→ [Theme performance](http://themeshaper.com/2014/02/06/theme-performance/)

→ [Cutting response time](http://www.reficio.org/2012/08/02/minimize-the-response-time-of-your-blog-to-less-than-a-second/)

→ [13 Ways to Speed Up your WordPress Site](https://sitebeginner.com/wordpress/speed/)


### HHVM
Set-up WordPress to run on HHVM: [Steps to install HHVM (HipHop Virtual Machine)](http://hhvm.com/blog/3095/getting-wordpress-running-on-hhvm).

### PHP7
WordPress using PHP7 can result in about 2-3x speed improvement compared to PHP5.6. Unfortunately not many hosts support PHP7 yet but things are moving in the [right direction](https://wordpress.org/about/requirements/).


## WordPress News
✑ [WP Tavern](http://wptavern.com/) publishes articles on web development, with specific resources and news for and from the WordPress community.

✑ [Post Status](https://poststatus.com), Reader validated, curated WordPress news.

✑ [wpMail](http://wpmail.me) is another weekly WordPress newsletter.
