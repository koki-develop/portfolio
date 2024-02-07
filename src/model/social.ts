export type Social = {
  name: string;
  url: string;
  imageSrc: string;
};

export type Socials = {
  github: Social;
  x: Social & { username: string };
  zenn: Social;
  bluesky: Social;
};
