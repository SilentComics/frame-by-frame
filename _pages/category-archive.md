---
layout: archive
permalink: /categories/
title: "Posts by Category"
author_profile: false
---

{% for category in categories %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
