import GoIcon from "@/../public/icons/skill/go.svg";
import JavaScriptIcon from "@/../public/icons/skill/javascript.svg";
import TypeScriptIcon from "@/../public/icons/skill/typescript.svg";
import GitHubIcon from "@/../public/icons/social/github.svg";
import TwitterIcon from "@/../public/icons/social/twitter.svg";
import ZennIcon from "@/../public/icons/social/zenn.svg";
import React from "react";

const Icons = {
  // social
  github: GitHubIcon,
  twitter: TwitterIcon,
  zenn: ZennIcon,
  // language
  go: GoIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
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
