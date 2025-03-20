import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    vike(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    tailwindcss(),
    svgr(),
    vercel(),
  ],
});
