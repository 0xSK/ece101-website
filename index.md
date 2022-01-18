---
layout: home
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

#### Lectures
Mondays & Wednesdays, 11:00am – 11:50am 

[Join Zoom Lecture]({{ site.aux_links.zoom_lec.link}}){: .btn .btn-outline } <br>
Meeting ID: `892 9141 3832` Password: `269962`

[See Lecture Schedule](#calendar){: .btn .btn-outline } 

#### Labs
Fridays, 10:00am – 11:50am

[Join Zoom Lab]({{ site.aux_links.zoom_lab.link}}){: .btn .btn-outline } <br>
Meeting ID: `892 9141 3832` Password: `269962` (same as lectures)

#### Office Hours
TBA

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
<!-- {% include schedule.html %} -->
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

<!-- ---
## Midterm Exam Information
{% include midterm.md %} -->

---
## All Announcements
{% for announcement in all_announcements %}
  {{ announcement }}
{% endfor %}
