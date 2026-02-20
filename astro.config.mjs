import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mwananchi.tech",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
