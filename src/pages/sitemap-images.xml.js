import { recipes } from '../data/recipes.js';

const SITE = 'https://welanutria.com';

function escapeXml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const entries = recipes
    .filter((r) => r.image)
    .map((r) => {
      const pageUrl = `${SITE}/recipes/${r.slug}/`;
      const imgUrl = `${SITE}/img/recipes/${r.image}`;
      const caption = escapeXml(r.description || r.title || '');
      const title = escapeXml(r.title || '');
      return `  <url>
    <loc>${pageUrl}</loc>
    <image:image>
      <image:loc>${imgUrl}</image:loc>
      <image:title>${title}</image:title>
      <image:caption>${caption}</image:caption>
    </image:image>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
