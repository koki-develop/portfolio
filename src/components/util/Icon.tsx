import DefsIcon from "@/../public/icons/defs.svg";
import AWSIcon from "@/../public/icons/skill/aws.svg";
import CircleCIIcon from "@/../public/icons/skill/circleci.svg";
import CypressIcon from "@/../public/icons/skill/cypress.svg";
import DaggerIcon from "@/../public/icons/skill/dagger.svg";
import DockerIcon from "@/../public/icons/skill/docker.svg";
import ExpressIcon from "@/../public/icons/skill/express.svg";
import GinIcon from "@/../public/icons/skill/gin.svg";
import GitHubActionsIcon from "@/../public/icons/skill/githubactions.svg";
import GoIcon from "@/../public/icons/skill/go.svg";
import GoogleCloudIcon from "@/../public/icons/skill/googlecloud.svg";
import JavaScriptIcon from "@/../public/icons/skill/javascript.svg";
import MantineIcon from "@/../public/icons/skill/mantine.svg";
import NextJSIcon from "@/../public/icons/skill/nextjs.svg";
import ReactIcon from "@/../public/icons/skill/react.svg";
import ServerlessIcon from "@/../public/icons/skill/serverless.svg";
import TailwindCSSIcon from "@/../public/icons/skill/tailwindcss.svg";
import TerraformIcon from "@/../public/icons/skill/terraform.svg";
import TypeScriptIcon from "@/../public/icons/skill/typescript.svg";
import VectyIcon from "@/../public/icons/skill/vecty.svg";
import VercelIcon from "@/../public/icons/skill/vercel.svg";
import GitHubIcon from "@/../public/icons/social/github.svg";
import TwitterIcon from "@/../public/icons/social/twitter.svg";
import ZennIcon from "@/../public/icons/social/zenn.svg";
import React from "react";

const Icons = {
  // defs
  defs: DefsIcon,
  // social
  github: GitHubIcon,
  twitter: TwitterIcon,
  zenn: ZennIcon,
  // language
  go: GoIcon,
  javascript: JavaScriptIcon,
  typescript: TypeScriptIcon,
  // framework/library
  gin: GinIcon,
  express: ExpressIcon,
  react: ReactIcon,
  nextjs: NextJSIcon,
  mantine: MantineIcon,
  tailwindcss: TailwindCSSIcon,
  vecty: VectyIcon,
  // cloud
  aws: AWSIcon,
  googlecloud: GoogleCloudIcon,
  vercel: VercelIcon,
  // ci/cd
  githubactions: GitHubActionsIcon,
  circleci: CircleCIIcon,
  dagger: DaggerIcon,
  // other
  terraform: TerraformIcon,
  docker: DockerIcon,
  serverless: ServerlessIcon,
  cypress: CypressIcon,
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
