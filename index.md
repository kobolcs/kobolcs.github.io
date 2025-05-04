---
layout: splash
title: "QA Automation for Complex E2E Workflows"
permalink: /
excerpt: "Maximizing Software Reliability, Minimizing Risk."

header:
  overlay_color: "#0D1B2A"  # Deep blue background
  overlay_filter: "0.4"
  overlay_image: /assets/images/hero.png  # Optional, add later or use a tech-inspired abstract
  actions:
    - label: "Book a Discovery Call"
      url: "/contact/"
    - label: "Learn More"
      url: "/about/"

# Optional for SEO and social
author_profile: false
---



# 🚀 Welcome

This is the clean new start.

---
## 🚀 My Services

<div class="service-grid">
{% for service in site.data.feature_row.services %}
  <a href="{{ service.url }}" class="service-card feature__item--clickable">
    <i class="service-icon {{ service.icon }}"></i>
    <div class="service-content">
      <h3>{{ service.title }}</h3>
      <p>{{ service.excerpt }}</p>
    </div>
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
