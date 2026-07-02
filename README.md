# LA STRADA — Luxury Cars & Concierge

A static, trilingual marketing site for the (fictional) **LA STRADA** brand — a private automotive concierge in the Algarve, Portugal. Built with vanilla HTML, CSS, and JavaScript. No build step, no framework, no dependencies to install.

> Portfolio piece. Open the repo, run a local server, see the site in under a minute.

---

## Preview

Open `index.html` in a browser, or serve the directory:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

```bash
# Node (npx)
npx serve .
```

---

## What it does

- **Trilingual UI** — English, Spanish, Portuguese (default). Language preference persists in `localStorage`. HTML lang attribute is updated for accessibility/SEO.
- **Sticky top nav** — translucent on the hero, solid on scroll, with a full-height drawer menu on mobile.
- **Full-bleed feature sections** — each with its own background image, gradient overlay, and reveal-on-scroll animation (IntersectionObserver).
- **Package comparison table** — responsive grid that collapses cleanly on small screens.
- **Testimonial cards** — auto-cycling card stack with manual dot navigation and keyboard-accessible close (Escape closes the menu drawer).
- **Image-anchored hero** — slow Ken-Burns zoom on the background.
- **Smooth in-page anchor scrolling** with offset for the fixed header.

---

## Stack

- HTML5 (semantic, accessible)
- CSS3 (custom properties / design tokens, CSS Grid, `clamp()` for fluid type, responsive at 1100 / 860 / 520 px breakpoints)
- Vanilla JavaScript (IIFE, no build, no jQuery, no framework)
- External: Google Fonts (Cormorant Garamond, Inter), Font Awesome 6, Unsplash imagery

Zero npm dependencies. The whole site ships in three files:

```
.
├── index.html
├── css/styles.css
└── js/main.js
```

---

## File map

| File              | Purpose                                                     |
| ----------------- | ----------------------------------------------------------- |
| `index.html`      | Single-page layout, all sections, semantic landmarks        |
| `css/styles.css`  | Design tokens, component styles, responsive breakpoints     |
| `js/main.js`      | i18n dictionary, language switcher, nav scroll state, testimonials cycle, smooth scroll, reveal-on-scroll, menu drawer |

---

## Notes

- All imagery is loaded from Unsplash public URLs.
- Brand, address, phone, and emails are **fictional** placeholder content. Replace with real values before any production use.
- Tested in current Chrome, Firefox, and Safari.

---

## License

This is a personal portfolio project. Reuse the layout, code, and design ideas freely.
