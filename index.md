---
layout: one-page
title: 'ECE 101 — Exploring Digital Information Technologies for Non-Engineers'
toc:
  - name: Logistics
    link: "#logistics"
  - name: Recent Announcements
    link: "#recent-announcements"
  - name: Calendar
    link: "#calendar"
  - name: Course Staff
    link: "#course-staff"
  - name: Syllabus
    link: "#syllabus"
  - name: Exam Information
    link: "#exam-information"
  - name: Grading Information
    link: "#grading-information"
  # - name: Midterm Exam Information
  #   link: "#midterm-exam-information"
  - name: All Announcements
    link: "#all-announcements"
seo:
  type: Course
  name: 'ECE 101 — Exploring Digital Information Technologies for Non-Engineers'
---


# {{ site.tagline }}
![ECE 101 Banner](assets/images/banner.jpg)

<!-- {: .mb-2 } {: .fs-6 .fw-300 } -->

## Logistics
{% include logistics.md %}

---

## Recent Announcements
{% assign num_recent_announcements = 2 %}
{% assign all_announcements = site.announcements | sort: "date" | reverse %}
{% for announcement in all_announcements limit:num_recent_announcements %}
  {{ announcement }}
{% endfor %}
[See All Announcements](#all-announcements){: .btn .btn-outline }


---
## Calendar
{% include calendar.md %}
---

## Course Staff
{% include staff.md %}

---

## Syllabus
{% include syllabus.md %}

---

## Exam Information
{% include exams.md %}

---

## Grading Information
{% include grading.md %}

---
## All Announcements
{% for announcement in all_announcements %}
  {{ announcement }}
{% endfor %}
