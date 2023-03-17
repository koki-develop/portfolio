import GitHubIcon from "@/../public/images/icons/github.svg";
import TwitterIcon from "@/../public/images/icons/twitter.svg";
import ZennIcon from "@/../public/images/icons/zenn.svg";
import React, { memo } from "react";

const icons = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  zenn: ZennIcon,
} as const;

export type IconProps = {
  icon: keyof typeof icons;
} & React.SVGProps<SVGElement>;

const Icon: React.FC<IconProps> = (props) => {
  const { icon, ...svgProps } = props;

  return React.createElement(icons[icon], svgProps);
};

export default Icon;
