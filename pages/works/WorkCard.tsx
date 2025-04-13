import type { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Card from "../../components/Card";
import GitHubIcon from "../../public/images/icons/socials/github.svg?react";
import type { Work } from "./Works";

const extractHostname = (url: string) => {
  return new URL(url).hostname;
};

export type WorkCardProps = {
  work: Work;
};

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  const url = work.url ?? work.githubUrl;
  const hostname = extractHostname(url);

  return (
    <Card className="flex h-full flex-col gap-2">
      <a
        className="flex w-fit flex-col"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="font-bold text-xl">{work.name}</h3>
        <p className="flex items-center gap-1 text-gray-400 text-sm">
          {hostname}
          <FaExternalLinkAlt size={12} />
        </p>
      </a>
      <p className="grow">{work.description}</p>

      {work.githubUrl && (
        <a
          className="flex w-fit items-center gap-1 text-gray-200 text-sm"
          href={work.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="size-4" />
          View on GitHub
        </a>
      )}
    </Card>
  );
};

export default WorkCard;
