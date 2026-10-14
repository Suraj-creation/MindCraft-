// Build step 3 of 3: writes a static HTML page for every route from the SSR bundle, plus the files
// search engines and AI crawlers read first (sitemap.xml, robots.txt, llms.txt) and a real 404 page.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const ssr = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const { ALL_TABS, INDEXABLE_TABS, PAGES, SITE, absoluteUrl, pageMeta, routePath, structuredData, render } = ssr;

const DEFAULT_ORIGIN = 'https://www.mindcraftconsultancy.com';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

let template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
if (SITE.origin !== DEFAULT_ORIGIN) template = template.replaceAll(DEFAULT_ORIGIN, SITE.origin);
if (!/<!--seo:start[\s\S]*?<!--seo:end-->/.test(template)) throw new Error('index.html is missing the <!--seo:start--> block');

const headFor = (tab) => {
  const m = pageMeta(tab);
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${m.canonicalUrl}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${m.canonicalUrl}" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<script type="application/ld+json">${json(structuredData(tab))}</script>`
  ].join('\n    ');
};

for (const tab of ALL_TABS) {
  const body = await render(tab);
  const html = template
    .replace(/<!--seo:start[\s\S]*?<!--seo:end-->/, headFor(tab))
    .replace('<div id="root"></div>', `<div id="root" data-route="${tab}">${body}</div>`);
  const out = tab === 'home' ? path.join(dist, 'index.html') : path.join(dist, tab, 'index.html');
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
}

// sitemap.xml: canonical routes only (aliases point their canonical elsewhere)
const urls = INDEXABLE_TABS.map((t) => `  <url><loc>${absoluteUrl(routePath(t))}</loc></url>`).join('\n');
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

// robots.txt: open to search and AI-answer crawlers; Content-Signal states the preference (no confirmed effect on Google)
await fs.writeFile(
  path.join(dist, 'robots.txt'),
  `# ${SITE.name}\nUser-agent: *\nContent-Signal: search=yes, ai-input=yes\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`
);

// llms.txt (llmstxt.org): a curated map for language-model tools. Google Search ignores it; other systems may read it.
const link = (t) => `- [${PAGES[t].name}](${absoluteUrl(routePath(t))}): ${pageMeta(t).description}`;
const groups = [
  ['Capabilities', ['consulting', 'market-research', 'ai-training', 'ai-solutions', 'operating-model']],
  ['Life Sciences', ['life-sciences']],
  ['Markets', ['industries', 'africa-explorer', 'africa-intelligence', 'localization', 'market-entry', 'question-to-outcome']],
  ['About', ['about', 'insights']],
  ['Optional', ['capability-graph', 'matrix-3d', 'engagement-builder']]
];
const llms = [
  `# ${SITE.name}`,
  '',
  `> ${SITE.description}`,
  '',
  'MindCraft offers four connected capabilities: Business Consulting; Market Research and Intelligence; AI Training and Digital Literacy; and AI Enterprise Solutions. Engagements can start with one focused need or combine several. Africa is the primary focus market (East, West, Central, Southern and North Africa), with clients also supported in Europe and the United States. Life Sciences is the specialist sector: Pharmaceuticals, Medical Devices, Medical Diagnostics, Medical Equipment, Surgical Consumables, and Hospitals & Healthcare Providers.',
  '',
  `Enquiries: ${SITE.email}`,
  '',
  ...groups.flatMap(([title, tabs]) => [`## ${title}`, '', ...tabs.map(link), ''])
].join('\n');
await fs.writeFile(path.join(dist, 'llms.txt'), llms);

// 404.html: served by the host with a 404 status for unknown paths; static, so no soft-404 app shell
const notFound = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Page not found | ${SITE.shortName}</title>
<meta name="robots" content="noindex" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&family=Plus+Jakarta+Sans:wght@400;600&display=swap" rel="stylesheet">
<style>
  body{margin:0;min-height:100dvh;display:grid;place-items:center;background:#050505;color:#e0e0e0;font:16px/1.6 'Plus Jakarta Sans',system-ui,sans-serif}
  main{width:min(36rem,100% - 2rem)}
  h1{font:500 clamp(2rem,6vw,2.9rem)/1.05 Outfit,system-ui,sans-serif;letter-spacing:-.025em;color:#fff;margin:0 0 1rem}
  p{color:rgba(255,255,255,.7);margin:0 0 1.75rem}
  ul{list-style:none;padding:0;margin:0;border-top:1px solid rgba(255,255,255,.1)}
  li{border-bottom:1px solid rgba(255,255,255,.1)}
  a{display:block;padding:.85rem 0;color:#fff;text-decoration:none;font-weight:600}
  a:hover{color:#a5b4fc} a:focus-visible{outline:2px solid #6366f1;outline-offset:2px;border-radius:4px}
</style>
</head>
<body>
<main>
  <h1>This page does not exist.</h1>
  <p>The link may be out of date. These are the main places to continue:</p>
  <ul>
${['home', 'consulting', 'market-research', 'ai-training', 'ai-solutions', 'life-sciences', 'industries', 'about']
  .map((t) => `    <li><a href="${routePath(t)}">${PAGES[t].name}</a></li>`)
  .join('\n')}
  </ul>
</main>
</body>
</html>
`;
await fs.writeFile(path.join(dist, '404.html'), notFound);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${ALL_TABS.length} routes, ${INDEXABLE_TABS.length} in sitemap.xml; wrote robots.txt, llms.txt, 404.html`);
