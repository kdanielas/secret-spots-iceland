import { defineConfig } from 'astro/config';

export default defineConfig({
  // Keep in sync with SITE_URL in src/data/site.ts, which builds the absolute
  // URLs used by the JSON-LD structured data.
  site: 'https://secretspotsoficeland.com',
  output: 'static',
});
