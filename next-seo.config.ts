import { config } from "./config";
import { DefaultSeoProps } from "next-seo";

const seo: DefaultSeoProps = {
  defaultTitle: config.user.name,
  titleTemplate: `%s | ${config.user.name}`,
  description: config.user.description,
  twitter: {
    cardType: "summary_large_image",
    handle: config.socials.twitter.username,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${config.url}/images/ogp.png`,
        secureUrl: `${config.url}/images/ogp.png`,
        width: 1200,
        height: 630,
        alt: config.user.name,
        type: "image/jpeg",
      },
    ],
  },
};

export default seo;
