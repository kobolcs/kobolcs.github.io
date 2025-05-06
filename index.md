---
layout: splash

title: "Eliminate Testing Bottlenecks. Accelerate Releases."
permalink: /
excerpt: "Bringing over a decade of test automation experience with SaaS, Web3, and Digital Product teams across Europe and North America — helping them reduce risk and accelerate releases."

header:
  overlay_color: "#0D1B2A"
  overlay_filter: "0.4"
  overlay_image: /assets/images/hero.png
  actions:
    - label: "Book a Discovery Call"
      url: "https://calendly.com/YOURLINK"
    - label: "Read About My Experience"
      url: "/about/#experience"
author_profile: true

custom_js:
  - /assets/js/custom.js

---


## 🚀 My Services

<div class="section-dark fade-in" aria-label="Services Section">
  <div class="service-grid">
  {% for service in site.data.feature_row.services %}
    <a href="{{ service.url }}" class="service-card feature__item--clickable" aria-label="Service: {{ service.title }}">
      <i class="service-icon {{ service.icon }}" aria-hidden="true"></i>
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
</div>

---

## Featured Case Studies

<div class="section-light fade-in" aria-label="Case Studies Section">
  <div class="card-grid">
  {% for case in site.data.feature_row.case_studies %}
    <div class="feature__item" aria-label="Case Study: {{ case.title }}">
      <h3>{{ case.title }}</h3>
      <p>{{ case.excerpt }}</p>
      {% if case.url %}
        <p><a href="{{ case.url }}" class="btn--inverse" aria-label="Read case study: {{ case.title }}">{{ case.btn_label }}</a></p>
      {% endif %}
    </div>
  {% endfor %}
  </div>
  <p><a href="/case-studies/" aria-label="View all case studies">Read more case studies →</a></p>
</div>

---

## About Me

<div class="section-accent fade-in" aria-label="About Me Section">
  <div class="about-snapshot">
    <div class="about-avatar">
      <img src="{{ site.author.avatar }}" alt="Photo of {{ site.author.name }}" />
    </div>
    <div class="about-content">
      <h3>{{ site.author.name }}</h3>
      <p>
      I’m a QA and Test Automation Consultant drawing on over a decade of experience as a test engineer for SaaS, Web3, and Digital Product teams across Europe and North America.
    </p>
    <p>
      I specialize in designing scalable, maintainable test automation frameworks tailored to fast-paced development environments. My focus is reducing risk, improving quality, and aligning testing efforts with business goals.
    </p>
    <p>
      I’m now offering direct consulting services to help engineering leaders overcome testing bottlenecks, enhance their test automation maturity, and accelerate software delivery.
    </p>
      <p><a href="/about/#my-philosophy" class="btn--inverse" aria-label="Discover my testing philosophy
">Discover my testing philosophy</a></p>
    </div>
  </div>
</div>