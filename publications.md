---
layout: default
title: Publications
permalink: /publications/
---

Publications as first author or as core contributor.

<ol class="pubs">
{%- for p in site.data.publications %}
  <li>
    {{ p.authors | replace: "M. J. Wilson", "<strong>M. J. Wilson</strong>" }}{% if p.year %} ({{ p.year }}){% endif %}.
    {% if p.url %}<a href="{{ p.url }}"><em>{{ p.title }}</em></a>{% else %}<em>{{ p.title }}</em>{% endif %}{% if p.venue %}. {{ p.venue }}{% endif %}.
  </li>
{%- endfor %}
</ol>
