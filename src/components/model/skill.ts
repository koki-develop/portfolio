import { IconName } from "@/components/util/icon";

export type Skill = {
  url: string;
  icon: IconName;
};

export type SkillGroup = {
  name: string;
  skills: Skill[];
};

export const Skills = {
  go: {
    url: "https://golang.org/",
    icon: "go",
  },
  typescript: {
    url: "https://www.typescriptlang.org/",
    icon: "typescript",
  },
  javascript: {
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
    icon: "javascript",
  },
} as const;

export type SkillName = keyof typeof Skills;

export const getSkill = (name: SkillName): Skill => {
  return Skills[name];
};
