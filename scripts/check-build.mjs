import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { site } from '../lib/site.ts';
import { projects } from '../lib/projects.ts';
const root = resolve('dist/client');
const routes = ['/', ...projects.map((p) => `/work/${p.slug}/`), '/404/'];
const seenTitles = new Set();
const exists = async (path) => {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
};
const routeFile = (path) =>
  resolve(root, '.' + path, path.endsWith('/') ? 'index.html' : '');
let linksChecked = 0;
for (const route of routes) {
  const path = routeFile(route);
  const html = await readFile(path, 'utf8');
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: exactly one h1`,
  );
  assert.match(html, /<html[^>]*lang="en"/, `${route}: language`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(
    title && !seenTitles.has(title),
    `${route}: unique nonempty page title`,
  );
  seenTitles.add(title);
  assert.match(
    html,
    /name="description" content="[^"]+"/,
    `${route}: description`,
  );
  if (route !== '/404/') {
    assert(html.includes(`href="${site.url}${route}"`), `${route}: canonical`);
    assert.match(
      html,
      /property="og:title" content="[^"]+"/,
      `${route}: Open Graph title`,
    );
  }
  assert(
    !/lorem ipsum|Untitled site|Your site is taking shape/i.test(html),
    `${route}: no starter copy`,
  );
  // Check rendered asset URLs and navigation, not serialized RSC payload strings.
  for (const tag of html.matchAll(/<(?:a|link|script|img)\b[^>]*>/g)) {
    const value = tag[0].match(/(?:href|src)="([^"]+)"/)?.[1];
    if (!value || /^(https?:|mailto:|data:)/.test(value)) continue;
    const url = new URL(
      value.replaceAll('&amp;', '&'),
      `https://local.test${route}`,
    );
    if (url.origin !== 'https://local.test') continue;
    const dest = extname(url.pathname)
      ? resolve(root, '.' + url.pathname)
      : routeFile(url.pathname);
    assert(dest.startsWith(root + '/'), `Path stays in build: ${value}`);
    assert(await exists(dest), `${route}: missing local target ${value}`);
    if (url.hash) {
      const targetHtml = await readFile(dest, 'utf8');
      assert(
        targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `${route}: missing anchor ${value}`,
      );
    }
    linksChecked++;
  }
}
const pdf = await readFile(resolve(root, 'erik-olvera-resume.pdf'));
assert(pdf.subarray(0, 5).toString() === '%PDF-', 'Résumé is a real PDF');
assert(pdf.length > 10000, 'Résumé has content');
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8');
for (const route of routes.filter((r) => r !== '/404/'))
  assert(sitemap.includes(`${site.url}${route}`), `Sitemap contains ${route}`);
assert(await exists(resolve(root, 'robots.txt')), 'robots.txt exists');
assert(await exists(resolve(root, '404.html')), 'Static 404 exists');
console.log(
  `Passed: ${routes.length} pages, ${linksChecked} internal links/assets, unique SEO metadata, sitemap, résumé, and 404.`,
);
