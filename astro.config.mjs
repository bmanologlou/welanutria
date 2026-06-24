import { defineConfig } from 'astro/config';

// Static site — Cloudflare Pages builds this automatically on each push.
export default defineConfig({
  site: 'https://welanutria.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
