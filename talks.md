---
layout: default
title: Talks
permalink: /talks/
---
{%- comment -%}
  Shown only when show_talks: true in _config.yml (the tab is hidden otherwise).
  Edit the list in _data/talks.yml.
{%- endcomment -%}
{% if site.show_talks %}
<ul class="talks">
{%- assign talks = site.data.talks | reverse %}
{%- for t in talks %}
  <li>
    <span class="talk-date">{{ t.date }}</span>
    <span class="talk-body">{{ t.title }}, {{ t.place }}{% if t.invited %} <span class="tag">Invited</span>{% endif %}</span>
  </li>
{%- endfor %}
</ul>
{% else %}
<p>No talks listed.</p>
{% endif %}
