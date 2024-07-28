import react from "@astrojs/react";
import { defineConfig } from "astro/config";

const config = defineConfig({
  integrations: [react()],
  server: {
    port: 3000,
  },
});

export default config;
