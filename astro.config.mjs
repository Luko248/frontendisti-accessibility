import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  server: {
    port: 4322,
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
});
