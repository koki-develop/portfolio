import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import OGImage from "../assets/og.png";
import Layout from "../layout/Layout";

export default {
  Layout,

  title: "Koki Sato",
  description: "のんびり生きています。",
  image: OGImage,

  extends: vikeReact,
} satisfies Config;
