import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    vike({
      prerender: true,
    }),
    react({}),
    vercel(),
  ],
});
