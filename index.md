---
layout: home
title: CS/ECE 434
nav_exclude: true
seo:
  type: Course
  name: CS/ECE 434 - Mobile Computing Algorithms and Applications
---

# {{ site.tagline }}
{: .mb-2 }
<!-- {{ site.description }} -->
{: .fs-6 .fw-300 }

#### Lectures

M/W 10-11:20am on Zoom

[Join Zoom Lectures](https://illinois.zoom.us/j/84040260100?pwd=RjVoSjZabnNaNXh5SlZoWUtVRnlOUT09){: .btn .btn-outline } [View Office Hours Information](staff.md){: .btn .btn-outline }

---

## Recent Announcements

[View All Announcements](announcements.md){: .btn .btn-outline }

{% if site.announcements %}
{{ site.announcements.last }}
{% endif %}

---
## Calendar
{% assign sorted_modules = site.modules | sort: "sort_order" %}
{% for module in sorted_modules %}
{{ module }}
{% endfor %}