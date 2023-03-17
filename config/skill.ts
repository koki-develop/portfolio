import { SkillGroup } from "@/components/model/skill";
import * as skills from "@/components/model/skill";

export const skillGroups: SkillGroup[] = [
  {
    name: "Language",
    skills: [skills.go, skills.javascript, skills.typescript],
  },
  {
    name: "Framework/Library",
    skills: [skills.gin, skills.express, skills.react, skills.nextjs],
  },
  {
    name: "Cloud",
    skills: [skills.aws, skills.googleCloud],
  },
  {
    name: "CI/CD",
    skills: [skills.githubActions, skills.circleci],
  },
  {
    name: "Other",
    skills: [skills.terraform, skills.docker],
  },
];
