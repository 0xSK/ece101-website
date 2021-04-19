---
layout: home
title: Home
toc:
  - name: Recent Announcements
    link: "#recent-announcements"
  - name: Calendar
    link: "#calendar"
  - name: Course Staff
    link: "#course-staff"
  - name: Syllabus
    link: "#syllabus"
  - name: Grading Information
    link: "#grading-information"
  - name: Midterm Exam Information
    link: "#midterm-exam-information"
  - name: All Announcements
    link: "#all-announcements"
seo:
  type: Course
  name: CS/ECE 434 - Mobile Computing Algorithms and Applications
---


# {{ site.tagline }}
<!-- {: .mb-2 } {: .fs-6 .fw-300 } -->

## Lectures

M/W 10-11:20am on Zoom

[Join Zoom Lectures](https://illinois.zoom.us/j/84040260100?pwd=RjVoSjZabnNaNXh5SlZoWUtVRnlOUT09){: .btn .btn-outline } [View Office Hours Information](staff.md){: .btn .btn-outline }

---

## Recent Announcements
{% assign num_recent_announcements = 1 %}
{% assign all_announcements = site.announcements | sort: "date" | reverse %}
{% for announcement in all_announcements limit:num_recent_announcements %}
  {{ announcement }}
{% endfor %}
[View All Announcements](#all-announcements){: .btn .btn-outline }


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
## Grading Information
{% include grading.md %}

---
## Midterm Exam Information
{% include midterm.md %}

---
## All Announcements
{% for announcement in all_announcements %}
  {{ announcement }}
{% endfor %}