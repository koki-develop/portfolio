import type { FC } from "react";

type Qualification = {
  name: string;
  href: string;
};

const qualifications: Qualification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    href: "https://www.credly.com/badges/a6b750f7-2601-4582-8131-3974e08eee5f/public_url",
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    href: "https://www.credly.com/badges/385e90d5-3f8e-470a-bf87-51353ce88677/public_url",
  },
  {
    name: "AWS Certified Developer - Associate",
    href: "https://www.credly.com/badges/f88839f5-1909-4869-8cc5-432a2b987871/public_url",
  },
  {
    name: "Google Cloud Associate Cloud Engineer",
    href: "https://www.credential.net/2316bc23-49ca-4aa1-8892-acee13740c99",
  },
];

const Qualifications: FC = () => {
  return (
    <ul className="list-disc list-inside flex flex-col gap-2">
      {qualifications.map((qualification) => (
        <li key={qualification.name}>
          <a
            href={qualification.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {qualification.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Qualifications;
