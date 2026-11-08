---
layout: default
title: Talks
permalink: /talks/
---
{%- comment -%}
  Shown only when show_talks: true in _config.yml (the tab is hidden otherwise).
  Edit the list in _data/talks.yml; dates are "Mon. YYYY".
{%- endcomment -%}
{% if site.show_talks %}
{%- assign talks = site.data.talks | reverse %}
{%- assign years = "" | split: "" %}
{%- for t in talks %}{% assign y = t.date | split: " " | last %}{% unless years contains y %}{% assign years = years | push: y %}{% endunless %}{% endfor %}
{%- for y in years %}
<h2 class="talk-year">{{ y }}</h2>
<table class="talks">
  <tbody>
  {%- for t in talks %}{% assign ty = t.date | split: " " | last %}{% if ty == y %}
    <tr>
      <td class="talk-title">{{ t.title }}</td>
      <td class="talk-place">{{ t.place }}</td>
      <td class="talk-month">{{ t.date | split: " " | first | remove: "." }}</td>
    </tr>
  {%- endif %}{% endfor %}
  </tbody>
</table>
{%- endfor %}
{% else %}
<p>No talks listed.</p>
{% endif %}
