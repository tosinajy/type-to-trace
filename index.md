---
layout: base.njk
title: Home Page
---

## Welcome to my new blog!

This is a static site built with 11ty. Below you will find my latest thoughts.

<h3>Latest Posts</h3>
<ul>
{% for post in collections.post %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> 
    <small>{{ post.date }}</small>
  </li>
{% endfor %}
</ul>