export type Social = {
  name: string;
  url: string;
  imageSrc: string;
};

export type Socials = {
  github: Social;
  twitter: Social & { username: string };
  zenn: Social;
};
