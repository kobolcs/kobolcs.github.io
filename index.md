---
layout: splash
title: "Welcome to Csaba Kobol’s Automation Hub"
permalink: /
---

# 🚀 Welcome

This is the clean new start.

---
## My Services

<div class="card-grid">
{% for service in site.data.feature_row.services %}
  <a href="{{ service.url }}" class="feature__item feature__item--clickable">
      <h3>{{ service.title }}</h3>
      <p>{{ service.excerpt }}</p>
  </a>
{% endfor %}
</div>

---

## Featured Case Studies

<div class="card-grid">
{% for case in site.data.feature_row.case_studies %}
  <div class="feature__item">
    <h3>{{ case.title }}</h3>
    <p>{{ case.excerpt }}</p>
    {% if case.url %}
      <p><a href="{{ case.url }}" class="btn--inverse">{{ case.btn_label }}</a></p>
    {% endif %}
  </div>
{% endfor %}
</div>
<p><a href="/case-studies/" class="btn--inverse">Read more case studies →</a></p>
