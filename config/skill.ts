import { SkillGroup } from "@/model/skill";
import * as skills from "@/model/skill";

export const skillGroups: SkillGroup[] = [
  {
    name: "Language",
    skills: [skills.go, skills.typescript, skills.javascript, skills.ruby],
  },
  {
    name: "Framework / Library",
    skills: [skills.gin, skills.express, skills.react, skills.nextjs],
  },
  {
    name: "Cloud",
    skills: [skills.aws, skills.googleCloud],
  },
  {
    name: "CI / CD",
    skills: [skills.githubActions, skills.circleci],
  },
  {
    name: "Other",
    skills: [skills.terraform, skills.docker],
  },
];
