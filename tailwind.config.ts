import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layout,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
