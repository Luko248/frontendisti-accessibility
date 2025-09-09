import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Configure Astro. We read optional env vars so that GitHub Actions
// can set correct `site` and `base` values for GitHub Pages deployments.
// - SITE_URL: full site URL, e.g. "https://user.github.io/repo"
// - BASE_PATH: base path, e.g. "/repo/" (use "/" for user/org pages)
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || "/",
  server: {
    port: 4323,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
