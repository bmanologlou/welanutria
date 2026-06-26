import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site — Cloudflare Pages builds this automatically on each push.
export default defineConfig({
  site: 'https://welanutria.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
