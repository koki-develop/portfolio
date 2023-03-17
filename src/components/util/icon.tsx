import GitHubIcon from "@/../public/images/icons/github.svg";
import GoIcon from "@/../public/images/icons/go.svg";
import TwitterIcon from "@/../public/images/icons/twitter.svg";
import ZennIcon from "@/../public/images/icons/zenn.svg";
import React from "react";

const Icons = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  zenn: ZennIcon,
  go: GoIcon,
} as const;

export type IconName = keyof typeof Icons;

export type IconProps = {
  icon: IconName;
} & React.SVGProps<SVGElement>;

const Icon: React.FC<IconProps> = (props) => {
  const { icon, ...svgProps } = props;

  return React.createElement(Icons[icon], svgProps);
};

export default Icon;
