---
layout: single
title: Setting an automatic default taxonomy for a custom post type
description: "WordPress: how to set a taxonomy programmatically."
author: Hoa
author_profile: false
excerpt: "Set a taxonomy programmatically in WordPress."
modified: 2017-12-18
category:
 - WordPress
tag:
- PHP
- Custom Post Type
- Taxonomy
comments: true
header:
  image:
  caption:
---

By default, a post in WordPress will be assigned to “uncategorized”. If we [use a custom taxonomy](/Previous-and-next-post-link-in-same-custom-taxonomy/), say “story” for a “comic” custom post type, there is no default category to fall within anymore.

<figure>
	<a href="/images/Uncategorized_custom_taxonomy.png"><img src="/images/Uncategorized_custom_taxonomy.png"></a>
	<figcaption>No taxonomy set</figcaption>
</figure>

Since there is no default taxonomy to pass through, the post will return **Undefined offset: 0** and **Trying to get property of non-object** errors if `WP_debug` is `'true'`.

<figure>
	<a href="/images/Undefined-offset-0.png"><img src="/images/Undefined-offset-0.png"></a>
	<figcaption>Undefined offset error</figcaption>
</figure>

To fix this, we can use the `wp_set_object_terms` function:

> “(it) Relates an object (post, link etc) to a term and taxonomy type (tag, category, etc). Creates the term and taxonomy relationship if it doesn’t already exist.”

Now we need to add a default taxonomy for this custom post type, so that if no story (taxonomy) is set, the comic post won’t return errors. Let’s assign all comic posts to “draft” by default.


In functions.php ->

{% highlight php %}
/**
* Add an automatic default custom taxonomy for custom post type.
* If no story (taxonomy) is set, the comic post will be sorted as “draft” and won’t return an offset error.
*
*/
    function set_default_object_terms( $post_id, $post ) {
        if ( 'publish' === $post->post_status && $post->post_type === 'comic' ) {
            $defaults = array(
                'story' => array( 'draft' ){{ site.url }}
                );
            $taxonomies = get_object_taxonomies( $post->post_type );
            foreach ( (array) $taxonomies as $taxonomy ) {
                $terms = wp_get_post_terms( $post_id, $taxonomy );
                if ( empty( $terms ) && array_key_exists( $taxonomy, $defaults ) ) {
                    wp_set_object_terms( $post_id, $defaults[$taxonomy], $taxonomy );
                }
            }
        }
    }
    add_action( 'save_post', 'set_default_object_terms', 0, 2 );
{% endhighlight %}

## Result:
Now any uncategorised comic post will automatically be sorted as a story “draft” without error. The URL will read as http://url/taxonomy/name.

<figure>
	<a href="/images/Test-with-taxonomies-unchecked.png"><img src="/images/Test-with-taxonomies-unchecked.png"></a>
	<figcaption>A post with no taxonomy term checked</figcaption>
</figure>

<figure>
	<a href="/images/Taxonomy_term_draft.png"><img src="/images/Taxonomy_term_draft.png"></a>
	<figcaption>The comic post, categorised as a draft.</figcaption>
</figure>

If we go back to the comic administration panel, we see that “draft” is checked.

<figure>
	<a href="/images/automatic_taxonomy_draft.png"><img src="/images/automatic_taxonomy_draft.png"></a>
	<figcaption>The comic post, categorised as a draft.</figcaption>
</figure>

Know a better way or another method? Please leave a comment below.


[Function Reference: wp_set_object_terms](https://codex.wordpress.org/Function_Reference/wp_set_object_terms)
{: .notice}
