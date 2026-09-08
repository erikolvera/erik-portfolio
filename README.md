# Erik Olvera — engineering portfolio

A source-backed portfolio focused on Python, backend systems, financial software, and applied AI.

The homepage is designed for a fast recruiter scan. DebtPilot, GOLAZO, and AniMood have deeper case studies, while the image-classification and housing-affordability projects add machine-learning and data-analysis evidence. Technical claims were checked against local source and commit history.

## Local development

Requires Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server.

## Validation

```bash
npm run check
npm run build
npm test
npm audit
```

The production build is a static export in `dist/client`. The build also generates `robots.txt` and `sitemap.xml`; the test script checks page titles, descriptions, canonical URLs, local links and assets, the public résumé, and the custom 404 page.

## Deployment

The repository includes `.openai/hosting.json` for OpenAI Sites. Any static host can publish `dist/client` after `npm run build`.

## Main files

- `app/page.tsx` — homepage and supporting-project summaries
- `app/work/[slug]/page.tsx` — statically generated case-study pages
- `lib/projects.ts` — source-backed case-study content and evidence links
- `components/portfolio/` — navigation, diagrams, cards, and contact components
- `public/erik-olvera-resume.pdf` — one-page public résumé without phone or home address
