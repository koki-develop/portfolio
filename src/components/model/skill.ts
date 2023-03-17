import { IconName } from "@/components/util/icon";

export type Skill = {
  name: string;
  url: string;
  icon: IconName;
};

export type SkillGroup = {
  name: string;
  skills: Skill[];
};

export const go: Skill = {
  name: "Go",
  url: "https://golang.org/",
  icon: "go",
};

export const typescript: Skill = {
  name: "TypeScript",
  url: "https://www.typescriptlang.org/",
  icon: "typescript",
};

export const javascript: Skill = {
  name: "JavaScript",
  url: "https://developer.mozilla.org/docs/Web/JavaScript",
  icon: "javascript",
};

export const gin: Skill = {
  name: "Gin",
  url: "https://gin-gonic.com/",
  icon: "gin",
};

export const express: Skill = {
  name: "Express",
  url: "https://expressjs.com/",
  icon: "express",
};

export const react: Skill = {
  name: "React",
  url: "https://reactjs.org/",
  icon: "react",
};

export const nextjs: Skill = {
  name: "Next.js",
  url: "https://nextjs.org/",
  icon: "nextjs",
};

export const aws: Skill = {
  name: "AWS",
  url: "https://aws.amazon.com/",
  icon: "aws",
};

export const googleCloud: Skill = {
  name: "Google Cloud",
  url: "https://console.cloud.google.com/",
  icon: "googlecloud",
};

export const githubActions: Skill = {
  name: "GitHub Actions",
  url: "https://github.co.jp/features/actions",
  icon: "githubactions",
};

export const circleci: Skill = {
  name: "CircleCI",
  url: "https://circleci.com/",
  icon: "circleci",
};

export const terraform: Skill = {
  name: "Terraform",
  url: "https://www.terraform.io/",
  icon: "terraform",
};

export const docker: Skill = {
  name: "Docker",
  url: "https://www.docker.com/",
  icon: "docker",
};
