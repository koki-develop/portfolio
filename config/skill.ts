import { getSkill, SkillGroup } from "@/components/model/skill";

const go = getSkill("go");
const javascript = getSkill("javascript");
const typescript = getSkill("typescript");

export const skillGroups: SkillGroup[] = [
  {
    name: "Language",
    skills: [go, javascript, typescript],
  },
];
