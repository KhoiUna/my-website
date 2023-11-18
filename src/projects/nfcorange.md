---
title: NFC Orange
description: "Modernize Career Fairs: Embrace the Paperless Revolution"
date: "2023-03-01"
ogImage: /assets/images/nfcorange.webp
sourceCode: https://github.com/KhoiUna/nfc-orange
liveDemo: https://www.nfcorange.com/
---

### Content

- [Problem](#problem)
- [Solution](#solution)
- [Team](#team)
- [Tech stack](#tech-stack)
- [Why we failed](#why-we-failed)

I blogged about this project. If interested, you can {%newtab_link 'https://blog.imkhoi.com/posts/2023/02/startup-at-uni/' 'read the blog here'%}.

# Problem

NFC Orange addresses the inefficiencies of traditional career fairs by digitizing the process, eliminating the need for paper resumes, and providing a modern solution for students and recruiters to connect seamlessly.

# Solution

We replace paper resumes with NFC cards that students can tap on recruiters' phones to share their resumes. We also built a NFC reader that students could tap their card on. The reader would read the card and save it to the **Recruiter dashboard** we built.

{%asset_img 'recruiter-dashboard.webp' 'Recruiter Dashboard'%}

<sub>NFC Orange's Recruiter Dashboard</sub>

During the course of the project, we had added more features like adding the **Analytics** feature for students to track how many times their profile has been viewed.

# Team

Worked in a team of two:

- {%newtab_link 'https://www.linkedin.com/in/avish-yadav/' 'Avish Yadav'%} &mdash; MBA in Global Business.

# Tech stack

**Front end:** React, NextJS, Tailwind CSS.

**Back end:** NodeJS, Express.

**Hardware:** {%newtab_link 'https://docs.particle.io/boron/' 'Particle Boron'%} (for sending HTTP requests), RC522 (for reading the NFC cards).

# Why we failed

Even though we successfully raised fund for this project from our Dean of College Business & Technology, we failed due to lack of product market fit. We had some early user's interests (by handing out free cards and posting on social media), but there was no word-of-mouth or engagement.

Here is how often people tap their cards. As you can see, most of these came from me or Avish showing that not a lot have used it after receiving the cards.
{%asset_img 'nfcorange-sql.webp' 'NFC Orange user scanning data from PostgreSQL'%}

In addition, students still prefer taking their resume to the NFC cards, since recruiters have QR codes for students to scan and apply directly on their company's job portal.
