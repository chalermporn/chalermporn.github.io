# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

A static personal portfolio + Markdown blog built with **Astro 5**, deployed to GitHub Pages. Prose, blog content, and UI copy are in **Thai**.

## Commands

This project uses **bun** as its package manager. The committed lockfile is `bun.lock`.

```bash
bun install        # first time only
bun run dev        # dev server at http://localhost:4321 (hot reload)
bun run build      # static output to dist/
bun run preview    # serve the real build before deploying
```

There are no tests, linter, or formatter configured. Type checking comes from `astro/tsconfigs/strict` (extended in tsconfig.json); run `bun run build` to surface type errors.

> Note: the GitHub Pages workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) still installs with `npm ci` against a committed `package-lock.json`. If you standardize on bun, update CI to use `bun install` and drop `package-lock.json`; until then keep both lockfiles in sync.

## Architecture

**Single source of truth for content: [src/config.ts](src/config.ts).** Site identity, bio, facts/stats, the `projects` array, `socials`, and the Hero typed-text strings all live here. Pages import from it — editing portfolio content means editing this file, not the `.astro` templates. Lucide icon names (see https://lucide.dev/icons) are used throughout (`astro-icon` + `@iconify-json/lucide`); a `Project`/`Social` `icon` field is a Lucide name string.

**Blog is a content collection.** [src/content.config.ts](src/content.config.ts) defines the `blog` collection via a `glob` loader over `src/content/blog/**/*.md`, with a Zod schema (`title`, `date`, optional `excerpt`, `icon` Lucide name, `draft` boolean). Adding a post = dropping a `.md` file in `src/content/blog/`; the filename becomes the slug. [src/pages/blog/[...slug].astro](src/pages/blog/[...slug].astro) generates each post page; [src/pages/blog/index.astro](src/pages/blog/index.astro) and the homepage list posts, filtering out `draft: true` and sorting by `date` descending.

**Layout owns all client-side behavior.** [src/layouts/Base.astro](src/layouts/Base.astro) holds `<head>` (fonts, OG tags), and inline `<script>` blocks for: theme toggle (persisted in `localStorage` under `theme`, applied pre-paint via `data-theme` on `<html>` to avoid flash), the mobile nav burger, and `IntersectionObserver` scroll-reveal (adds `.reveal`/`.visible` to `.section` and `.hero-inner`). Theming is pure CSS variables keyed on `[data-theme]` in [src/styles/global.css](src/styles/global.css) — icons swap via CSS, not JS.

**Asset paths must respect `BASE_URL`.** Use `import.meta.env.BASE_URL` (or `Astro.site`) when referencing public assets so the site works under a non-root `base`. This matters because of deployment config below.

## Deployment

Push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml) (build + deploy to GitHub Pages). Before deploying, the two values in [astro.config.mjs](astro.config.mjs) must match the repo type:

- **User/org site** (repo named `<username>.github.io`): `site: "https://<username>.github.io"`, `base: "/"` — current setting (`chalermporn.github.io`, base `/`).
- **Project site** (any other repo name, e.g. `me`): keep `site` the same, set `base: "/me"`.
