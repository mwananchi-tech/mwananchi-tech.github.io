import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mwananchi-tech.github.io",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
