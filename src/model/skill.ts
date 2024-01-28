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
  imageSrc: "/images/skill/go.svg",
};

export const typescript: Skill = {
  name: "TypeScript",
  url: "https://www.typescriptlang.org/",
  imageSrc: "/images/skill/typescript.svg",
};

export const javascript: Skill = {
  name: "JavaScript",
  url: "https://developer.mozilla.org/docs/Web/JavaScript",
  imageSrc: "/images/skill/javascript.svg",
};

export const ruby: Skill = {
  name: "Ruby",
  url: "https://www.ruby-lang.org",
  imageSrc: "/images/skill/ruby.svg",
};

/*
 * framework/library
 */

export const gin: Skill = {
  name: "Gin",
  url: "https://gin-gonic.com/",
  imageSrc: "/images/skill/gin.svg",
};

export const express: Skill = {
  name: "Express",
  url: "https://expressjs.com/",
  imageSrc: "/images/skill/express.svg",
};

export const react: Skill = {
  name: "React",
  url: "https://reactjs.org/",
  imageSrc: "/images/skill/react.svg",
};

export const nextjs: Skill = {
  name: "Next.js",
  url: "https://nextjs.org/",
  imageSrc: "/images/skill/nextjs.svg",
};

export const mantine: Skill = {
  name: "Mantine",
  url: "https://mantine.dev/",
  imageSrc: "/images/skill/mantine.svg",
};

export const tailwindcss: Skill = {
  name: "Tailwind CSS",
  url: "https://tailwindcss.com/",
  imageSrc: "/images/skill/tailwindcss.svg",
};

export const materialui: Skill = {
  name: "Material UI",
  url: "http://material-ui.com/",
  imageSrc: "/images/skill/materialui.svg",
};

export const cobra: Skill = {
  name: "Cobra",
  url: "https://cobra.dev/",
  imageSrc: "/images/skill/cobra.png",
};

export const bubbletea: Skill = {
  name: "Bubble Tea",
  url: "https://github.com/charmbracelet/bubbletea",
  imageSrc: "/images/skill/bubbletea.png",
};

/*
 * cloud
 */

export const aws: Skill = {
  name: "AWS",
  url: "https://aws.amazon.com/",
  imageSrc: "/images/skill/aws.svg",
};

export const googleCloud: Skill = {
  name: "Google Cloud",
  url: "https://console.cloud.google.com/",
  imageSrc: "/images/skill/googlecloud.svg",
};

export const vercel: Skill = {
  name: "Vercel",
  url: "https://vercel.com/",
  imageSrc: "/images/skill/vercel.svg",
};

/*
 * ci/cd
 */

export const githubActions: Skill = {
  name: "GitHub Actions",
  url: "https://github.co.jp/features/actions",
  imageSrc: "/images/skill/githubactions.svg",
};

export const circleci: Skill = {
  name: "CircleCI",
  url: "https://circleci.com/",
  imageSrc: "/images/skill/circleci.svg",
};

/*
 * other
 */

export const terraform: Skill = {
  name: "Terraform",
  url: "https://www.terraform.io/",
  imageSrc: "/images/skill/terraform.svg",
};

export const docker: Skill = {
  name: "Docker",
  url: "https://www.docker.com/",
  imageSrc: "/images/skill/docker.svg",
};

export const serverless: Skill = {
  name: "Serverless",
  url: "https://serverless.com/",
  imageSrc: "/images/skill/serverless.svg",
};

export const cypress: Skill = {
  name: "Cypress",
  url: "https://www.cypress.io/",
  imageSrc: "/images/skill/cypress.svg",
};
