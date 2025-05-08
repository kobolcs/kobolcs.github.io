---
layout: splash
title: "QA Test Automation Consulting"
permalink: /
excerpt: "Custom automation solutions for complex web apps. Reduce testing risk. Accelerate releases."

header:
  overlay_color: "#0D1B2A"
  overlay_filter: "0.4"
  overlay_image: /assets/images/hero.png
  actions:
    - label: "Book a Discovery Call"
      url: "/contact/"
    - label: "Learn More"
      url: "/about/"
author_profile: true

header:
  overlay_color: "#0D1B2A"  # Deep blue background
  overlay_filter: "0.4"
  overlay_image: /assets/images/hero.png  # Optional, add later or use a tech-inspired abstract
  actions:
    - label: "Book a Discovery Call"
      url: "/contact/"
author_profile: true

---
## 🚀 My Services

<div class="service-grid">
{% for service in site.data.feature_row.services %}
  <a href="{{ service.url }}" class="service-card feature__item--clickable">
    <i class="service-icon {{ service.icon }}"></i>
    {% if service.ribbon %}
    <span class="ribbon">{{ service.ribbon }}</span>
    {% endif %}

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
<p><a href="/case-studies/">Read more case studies</a></p>
---
## About Me

<div class="about-snapshot">
  <div class="about-avatar">
    <img src="{{ site.author.avatar }}" alt="{{ site.author.name }}" />
  </div>
  <div class="about-content">
    <h3>{{ site.author.name }}</h3>
    <p>{{ site.author.bio }}</p>
    <p><a href="/about/" class="btn--inverse">Learn more about me</a></p>
  </div>
</div>

