{% assign sorted_modules = site.modules | sort: "sort_order" %}
{% for module in sorted_modules %}
  {{ module }}
{% endfor %}