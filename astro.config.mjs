import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [mdx(), sitemap(), react()]
});
