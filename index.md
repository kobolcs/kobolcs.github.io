---
layout: splash
title: "Welcome to Csaba Kobol’s Automation Hub"
permalink: /
---

# 🚀 Welcome

This is the clean new start.

---

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

---

## DEBUG OUTPUT

{{ site.data.feature_row.services | inspect }}

---

## MANUAL TEST

{% for service in site.data.feature_row.services %}
### {{ service.title }}

{{ service.excerpt }}

{% endfor %}
