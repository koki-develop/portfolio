import { Skill } from "./skill";
import { config } from "@/../config";

export type Work = {
  name: string;
  description: string;
  url?: string;
  repository: string;
  skills: Skill[];
};

export type WorkGroup = {
  name: string;
  works: Work[];
};

export const repositoryUrl = (work: Work): string => {
  return `${config.socials.github.url}/${work.repository}`;
};
