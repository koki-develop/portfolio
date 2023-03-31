export type Skill = {
  name: string;
  url: string;
  imageSrc: string;
};

export type SkillGroup = {
  name: string;
  skills: Skill[];
};

/*
 * language
 */

export const go: Skill = {
  name: "Go",
  url: "https://golang.org/",
  imageSrc: "/icons/skill/go.svg",
};

export const typescript: Skill = {
  name: "TypeScript",
  url: "https://www.typescriptlang.org/",
  imageSrc: "/icons/skill/typescript.svg",
};

export const javascript: Skill = {
  name: "JavaScript",
  url: "https://developer.mozilla.org/docs/Web/JavaScript",
  imageSrc: "/icons/skill/javascript.svg",
};

/*
 * framework/library
 */

export const gin: Skill = {
  name: "Gin",
  url: "https://gin-gonic.com/",
  imageSrc: "/icons/skill/gin.svg",
};

export const express: Skill = {
  name: "Express",
  url: "https://expressjs.com/",
  imageSrc: "/icons/skill/express.svg",
};

export const react: Skill = {
  name: "React",
  url: "https://reactjs.org/",
  imageSrc: "/icons/skill/react.svg",
};

export const nextjs: Skill = {
  name: "Next.js",
  url: "https://nextjs.org/",
  imageSrc: "/icons/skill/nextjs.svg",
};

export const mantine: Skill = {
  name: "Mantine",
  url: "https://mantine.dev/",
  imageSrc: "/icons/skill/mantine.svg",
};

export const tailwindcss: Skill = {
  name: "Tailwind CSS",
  url: "https://tailwindcss.com/",
  imageSrc: "/icons/skill/tailwindcss.svg",
};

export const materialui: Skill = {
  name: "Material UI",
  url: "http://material-ui.com/",
  imageSrc: "/icons/skill/materialui.svg",
};

export const vecty: Skill = {
  name: "Vecty",
  url: "https://github.com/hexops/vecty",
  imageSrc: "/icons/skill/vecty.svg",
};

export const cobra: Skill = {
  name: "Cobra",
  url: "https://cobra.dev/",
  imageSrc: "/icons/skill/cobra.svg",
};

export const bubbletea: Skill = {
  name: "Bubble Tea",
  url: "https://github.com/charmbracelet/bubbletea",
  imageSrc: "/icons/skill/bubbletea.svg",
};

/*
 * cloud
 */

export const aws: Skill = {
  name: "AWS",
  url: "https://aws.amazon.com/",
  imageSrc: "/icons/skill/aws.svg",
};

export const googleCloud: Skill = {
  name: "Google Cloud",
  url: "https://console.cloud.google.com/",
  imageSrc: "/icons/skill/googlecloud.svg",
};

export const vercel: Skill = {
  name: "Vercel",
  url: "https://vercel.com/",
  imageSrc: "/icons/skill/vercel.svg",
};

/*
 * ci/cd
 */

export const githubActions: Skill = {
  name: "GitHub Actions",
  url: "https://github.co.jp/features/actions",
  imageSrc: "/icons/skill/githubactions.svg",
};

export const circleci: Skill = {
  name: "CircleCI",
  url: "https://circleci.com/",
  imageSrc: "/icons/skill/circleci.svg",
};

export const dagger: Skill = {
  name: "Dagger",
  url: "https://dagger.io/",
  imageSrc: "/icons/skill/dagger.svg",
};

/*
 * other
 */

export const terraform: Skill = {
  name: "Terraform",
  url: "https://www.terraform.io/",
  imageSrc: "/icons/skill/terraform.svg",
};

export const cdktf: Skill = {
  name: "CDK for Terraform",
  url: "https://developer.hashicorp.com/terraform/cdktf",
  imageSrc: "/icons/skill/terraform.svg",
};

export const docker: Skill = {
  name: "Docker",
  url: "https://www.docker.com/",
  imageSrc: "/icons/skill/docker.svg",
};

export const serverless: Skill = {
  name: "Serverless",
  url: "https://serverless.com/",
  imageSrc: "/icons/skill/serverless.svg",
};

export const cypress: Skill = {
  name: "Cypress",
  url: "https://www.cypress.io/",
  imageSrc: "/icons/skill/cypress.svg",
};
