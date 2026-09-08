import { writeFile } from 'node:fs/promises';
import { site } from '../lib/site.ts';
import { projects } from '../lib/projects.ts';
const origin = new URL(site.url).origin;
const urls = [
  origin + '/',
  ...projects.map((p) => `${origin}/work/${p.slug}/`),
];
const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
await writeFile(
  'dist/client/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
await writeFile(
  'dist/client/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${escapeXml(url)}</loc></url>`).join('')}</urlset>\n`,
);
console.log(`Static SEO files generated for ${urls.length} pages.`);
