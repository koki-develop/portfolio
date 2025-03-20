import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layout/Layout";

export default {
  Layout,

  title: "Koki Sato",
  description: "のんびり生きています。",
  image: "https://koki.me/og.png",

  lang: "ja",

  extends: vikeReact,
  prerender: true,
} satisfies Config;
