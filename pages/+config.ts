import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layout/Layout";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Koki Sato",
  description: "のんびり生きています。",

  extends: vikeReact,
} satisfies Config;
