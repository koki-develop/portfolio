export type Social = {
  url: string;
};

export type Socials = {
  github: Social;
  twitter: Social & { username: string };
  zenn: Social;
};
