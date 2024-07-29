/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
