---
layout: default
title: Publications
permalink: /publications/
---

Publications as first author or as core contributor.

{%- assign pubs = site.data.publications | sort: "year" | reverse %}
{%- assign years = "" | split: "" %}
{%- for p in pubs %}{% assign y = p.year | append: "" %}{% unless years contains y %}{% assign years = years | push: y %}{% endunless %}{% endfor %}
{%- for y in years %}
<h2 class="talk-year">{{ y }}</h2>
<ul class="pub-list">
{%- for p in pubs %}{% assign py = p.year | append: "" %}{% if py == y %}
  <li>
    <div class="pub-main">
      <div class="pub-title">{% if p.url %}<a href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}</div>
      <div class="pub-meta">{{ p.authors | replace: "M. J. Wilson", "<strong>M. J. Wilson</strong>" }}</div>
    </div>
    <div class="pub-venue">{{ p.venue }}</div>
  </li>
{%- endif %}{% endfor %}
</ul>
{%- endfor %}
