# madebykartik.us

Personal portfolio of Kartik Karkera: experience, projects, and certifications.

**Live:** https://madebykartik.us/

## Stack

React 18 and Vite, plain CSS with design tokens in `src/index.css`. No UI framework.

## Notable details

- **Name intro:** `src/components/Title/IntroName.jsx` types the name with a single caret. The full text is always rendered and untyped characters are hidden, so the layout is fixed from the first frame and the overlay lands exactly on the hero heading.
- **Motion:** scroll reveals use `IntersectionObserver`, and every animation respects `prefers-reduced-motion`.
- **Analytics:** optional, cookie-free [Umami](https://umami.is/). Disabled unless `VITE_UMAMI_WEBSITE_ID` is set (see `.env.example`).

## Run locally

```bash
npm install
npm run dev
```

`npm run build` outputs the static site to `dist/`. `npm run lint` runs ESLint.
