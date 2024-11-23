import type { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubIcon from "../../assets/icons/socials/github.svg?react";
import Card from "../../components/Card";
import type { Work } from "./Works";

export type WorkCardProps = {
  work: Work;
};

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  return (
    <Card className="flex h-full flex-col gap-2">
      <h3 className="flex font-bold text-xl">
        <a
          className="flex items-center gap-2"
          href={work.url ?? work.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {work.name}
          <FaExternalLinkAlt className="text-gray-400" size={16} />
        </a>
      </h3>
      <p className="flex-grow">{work.description}</p>

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
