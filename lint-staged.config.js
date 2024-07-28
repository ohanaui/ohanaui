/** @type {import("lint-staged").Config} */
const config = {
  "**/*.{astro,js,json,jsx,mjs,ts,tsx,yaml}": [
    "pnpm run prettier:write",
    "pnpm run eslint",
  ],
};

export default config;
