# Phạm Nhật Duy Anh — Portfolio

A single-page, monochrome portfolio site. Plain HTML + Tailwind CSS (via CDN)
+ vanilla JS — no build step, no framework required.

## File structure

```
portfolio/
├── index.html              All markup/content, organized by section
├── css/
│   └── style.css           Design tokens, components, animations
├── js/
│   ├── nav.js               Sticky header state, mobile menu, active link tracking
│   ├── scrollReveal.js       Fade-in-up reveals on scroll (IntersectionObserver)
│   ├── cardGlow.js           Pointer-tracked spotlight hover on project cards
│   ├── heroType.js           Rotating role text in the hero "$ currently building" line
│   ├── utils.js              Footer year, image fallback, back-to-top button
│   └── main.js               Entry point — initializes all of the above
└── assets/
    ├── favicon.svg           Monochrome monogram favicon
    └── images/
        └── PUT_PHOTO_HERE.txt  Where to drop the ESC 2025 group photo
```

Each JS file owns exactly one concern and attaches its `init()` function to
a shared `window.Portfolio` namespace; `main.js` calls them all once the DOM
is ready. Regular `<script defer>` tags are used (no ES modules), so the
site also works if you just double-click `index.html` — no local server
required.

## Things to customize before publishing

- **Tech stack tags** — `index.html` includes placeholder `<ul class="stack-list">`
  entries (e.g. Node.js, Express.js, MySQL / React, Tailwind CSS, Figma) for
  both projects, marked with `<!-- TODO -->` comments. Replace with whatever
  you actually used.
- **Social links** — GitHub, LinkedIn, and email in the footer are placeholders
  (`yourusername`, `[email protected]`). Update the `href` values.
- **ESC 2025 photo** — drop the real image at `assets/images/esc-2025-team.jpg`.
  Until you do, the page shows a clean placeholder frame instead of a broken
  image icon.
- **Favicon initials** — `assets/favicon.svg` currently shows "ĐA"; edit the
  `<text>` content if you'd like something else.

## Deploying

Any static host works since there's no build step:

- **GitHub Pages** — push this folder to a repo, then enable Pages on the
  `main` branch (root). Your site will be live at
  `https://<username>.github.io/<repo>/`.
- **Netlify / Vercel** — drag-and-drop the folder (or connect the repo) and
  deploy with no build command.
