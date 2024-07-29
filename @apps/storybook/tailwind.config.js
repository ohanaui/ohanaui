import preset from "../../@tools/tailwindcss/globals/preset.js";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  presets: [preset],
};

export default config;
