# Erik Olvera — engineering portfolio

**Live: [erik-olvera.vercel.app](https://erik-olvera.vercel.app)**

A source-backed portfolio focused on Python, backend systems, financial software, and applied AI.

The homepage is designed for a fast recruiter scan. DebtPilot, GOLAZO, and AniMood have deeper case studies, while the image-classification and housing-affordability projects add machine-learning and data-analysis evidence. Technical claims were checked against local source and commit history.

## Design

The site uses a "Matchday" identity — soccer broadcast information design rather than
decoration. The ground is a light printed matchday programme: cool paper, white cards,
cobalt for links and ochre for data. Palette tokens in `app/globals.css` are named for
print (`--paper`, `--panel`, `--rule`, `--ink`, `--quiet`, `--strike`, `--data`), and all
text pairings are verified at WCAG AA.

Two rules govern changes:

1. **No invented metrics.** Every claim traces to source or commit history. A project with
   no hard number gets its strongest true fact, never a padded one.
2. **Boldness in one place.** The formation graphic in the toolkit section is the signature
   — position encodes centrality, so it carries information rather than ornament.
   Everything around it stays quiet.

## Stack

Vinext (React 19 RSC on Vite) with Tailwind CSS v4, oxlint and oxfmt for linting and
formatting, and TypeScript. Built as a fully static export — no runtime server.

## Local development

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server.

## Validation

```bash
npm run check && npm run build && npm test
```

`npm run check` runs `tsc --noEmit` and oxlint. The production build is a static export in
`dist/client`, and `scripts/finalize-build.mjs` generates `robots.txt` and `sitemap.xml`.

`npm test` (`scripts/check-build.mjs`) asserts markup invariants as well as SEO: exactly
one `<h1>` per route, `lang="en"`, unique titles and descriptions, canonical URLs, no
placeholder text, every local `href`/`src` resolving to a real file, every in-page `#hash`
matching a real `id` in its target page, a valid résumé PDF, and a static 404. Renaming a
section without updating the nav fails the build rather than shipping a dead link.

## Deployment

Deployed on Vercel from `main`; `vercel.json` sets the build command, the `dist/client`
output directory, and trailing-slash routing. Any static host can publish `dist/client`
after `npm run build`.

`site.url` in `lib/site.ts` is baked into canonical URLs, Open Graph tags, the sitemap, and
robots.txt at build time — it must match the live domain above.

## Main files

- `app/page.tsx` — homepage: hero, work, about, toolkit formation, contact
- `app/work/[slug]/page.tsx` — statically generated case-study pages
- `app/globals.css` — matchday palette tokens and layout
- `lib/projects.ts` — source-backed case-study content and evidence links
- `lib/site.ts` — canonical URL, metadata, and contact links
- `components/portfolio/formation.tsx` — the toolkit formation graphic
- `components/portfolio/` — header, footer, project cards, showcase, architecture diagrams
- `scripts/check-build.mjs` — the build verification gate
- `public/erik-olvera-resume.pdf` — one-page public résumé
