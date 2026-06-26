# AvlokAI — Catalog Site

Marketing + automation catalog for [avlokai.com](https://avlokai.com). Built with React 18, Vite, React Router, and Tailwind CSS v4. Supports light/dark themes and ships per-route SEO + structured data (GEO).

## Stack

- **React 18** + **React Router 7** (client-side routing)
- **Vite 6** (build/dev)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- Catalog content parsed from `servicers.md` at build time (`src/data/services.js`)

## Local development

```bash
npm install
npm run dev      # start dev server
npm run lint     # eslint
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

Node 18+ recommended.

## Project structure

```
index.html              # app shell + base meta/OG + theme no-flash script
public/                 # static assets, robots.txt, sitemap.xml, manifest, SPA fallback
src/
  index.css             # design system: theme tokens, buttons, cards (Tailwind v4)
  App.jsx               # routes
  components/           # Navbar, Footer, ServiceCard, Seo, ThemeToggle, ...
  hooks/useTheme.js     # light/dark theme (localStorage + system pref)
  pages/                # Home, Services (catalog), ServiceDetail, About, Contact
  data/services.js      # catalog data (parsed from servicers.md)
```

## SEO / GEO

- Per-route `<Seo>` sets title, description, canonical, Open Graph, Twitter, and JSON-LD.
- Structured data: Organization + WebSite (global), ItemList, CollectionPage, Service, BreadcrumbList, FAQPage.
- `public/robots.txt` (incl. AI answer-engine crawlers) and `public/sitemap.xml`.
- **Update the production domain** in `src/components/Seo.jsx` (`SITE` constant), `index.html`, `public/sitemap.xml`, and `public/robots.txt` if it is not `https://avlokai.com`.

## Deployment

This is a static SPA. Build with `npm run build`; serve the `dist/` folder. Because routing is client-side, the host must rewrite unknown paths to `index.html`.

- **Vercel** — auto-detected (Vite). `vercel.json` provides the SPA rewrite. Build command `npm run build`, output `dist`.
- **Netlify** — `public/_redirects` (`/* /index.html 200`) is copied into the build. Build command `npm run build`, publish directory `dist`.
- **GitHub Pages / other static hosts** — serve `dist/` and configure a catch-all to `index.html`. If not hosting at the domain root, set `base` in `vite.config.js`.
