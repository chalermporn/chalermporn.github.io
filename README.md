# Bird — Portfolio (Astro)

Portfolio + blog ทำด้วย [Astro](https://astro.build) — เขียน component ได้,
blog เป็น Markdown, build ออกมาเป็น static แล้ว deploy ฟรีบน GitHub Pages
รองรับ dark/light theme (จำค่าใน localStorage)

> เวอร์ชัน static HTML เดิมถูกย้ายไปไว้ที่ `~/DEMO/ME-static-backup/`

## เริ่มพัฒนา

```bash
cd ~/DEMO/ME
npm install        # ครั้งแรกครั้งเดียว
npm run dev        # http://localhost:4321  (hot reload)
npm run build      # -> dist/  (static)
npm run preview    # ดู build จริงก่อน deploy
```

## โครงสร้าง

```
src/
├── config.ts                 ⭐ แก้ข้อมูลตัวเองที่นี่ที่เดียว
│                                 (ชื่อ, bio, projects, socials, typed text)
├── content/blog/*.md         ⭐ เขียนบล็อก — แค่วางไฟล์ .md เพิ่ม
├── content.config.ts         schema ของบล็อก (frontmatter)
├── layouts/Base.astro        โครง <head>, ฟอนต์, theme toggle, scroll-reveal
├── components/
│   ├── Header.astro
│   ├── Hero.astro            (typed effect)
│   ├── ProjectCard.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro           หน้าหลัก (about / work / writing / contact)
│   └── blog/
│       ├── index.astro       รายการบทความ
│       └── [...slug].astro   หน้าบทความ (สร้างจากไฟล์ .md อัตโนมัติ)
└── styles/global.css         base + theming (CSS variables) + responsive
public/favicon.svg
.github/workflows/deploy.yml  CI: push main แล้ว deploy เอง
astro.config.mjs              ⭐ ตั้ง site/base ตอน deploy
```

## เพิ่มบทความใหม่

วางไฟล์ใหม่ใน `src/content/blog/my-post.md`:

```markdown
---
title: "ชื่อบทความ"
date: 2026-06-14
excerpt: "เกริ่นสั้นๆ"
icon: "🚀"
draft: false
---

เนื้อหา Markdown ปกติ...
```

URL จะเป็น `/blog/my-post` อัตโนมัติ (ชื่อไฟล์ = slug)

## Deploy ขึ้น GitHub Pages

1. แก้ `astro.config.mjs`:
   - **user site** (repo ชื่อ `<username>.github.io`): `site: "https://<username>.github.io"`, `base: "/"`
   - **project site** (repo ชื่ออื่น เช่น `me`): `site: "https://<username>.github.io"`, `base: "/me"`
2. push ขึ้น GitHub (ผ่าน HTTPS):
   ```bash
   git init && git add . && git commit -m "init astro portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. GitHub → repo → **Settings → Pages → Source = GitHub Actions**
4. workflow `.github/workflows/deploy.yml` จะ build + deploy ให้เองทุกครั้งที่ push main

## ฟอร์มติดต่อให้รับเมลจริง

ตอนนี้ `<form action>` ใน `src/pages/index.astro` ชี้ไป Formspree placeholder —
สมัคร [Formspree](https://formspree.io) ฟรี เอา endpoint มาใส่แทน `your-id`
