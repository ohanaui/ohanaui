import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const config = defineConfig({
  integrations: [react(), tailwind()],
  server: {
    port: 3000,
  },
});

export default config;
