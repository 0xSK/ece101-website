---
layout: page
title: Announcements
nav_exclude: false
description: A feed containing all of the class announcements.
---

# All Announcements

{% assign announcements = site.announcements | sort: "date" | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}
