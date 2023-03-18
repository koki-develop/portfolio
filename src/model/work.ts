import { config } from "@/../config";

export type Work = {
  name: string;
  description: string;
  url?: string;
  repository: string;
};

export type WorkGroup = {
  name: string;
  works: Work[];
};

export const repositoryUrl = (work: Work): string => {
  return `${config.user.socials.github.url}/${work.repository}`;
};
