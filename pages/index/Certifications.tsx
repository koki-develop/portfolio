import type { FC } from "react";
import AWSDVAPng from "../../assets/aws-dva.png";
import AWSSAAPng from "../../assets/aws-saa.png";
import AWSSOAPng from "../../assets/aws-soa.png";
import GoogleCloudACEPng from "../../assets/googlecloud-ace.png";

type Certification = {
  name: string;
  image: string;
  href: string;
};

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    image: AWSSAAPng,
    href: "https://www.credly.com/badges/a6b750f7-2601-4582-8131-3974e08eee5f/public_url",
  },
  {
    name: "AWS Certified SysOps Administrator - Associate",
    image: AWSSOAPng,
    href: "https://www.credly.com/badges/385e90d5-3f8e-470a-bf87-51353ce88677/public_url",
  },
  {
    name: "AWS Certified Developer - Associate",
    image: AWSDVAPng,
    href: "https://www.credly.com/badges/f88839f5-1909-4869-8cc5-432a2b987871/public_url",
  },
  {
    name: "Google Cloud Certified Associate Cloud Engineer",
    image: GoogleCloudACEPng,
    href: "https://www.credential.net/2316bc23-49ca-4aa1-8892-acee13740c99",
  },
];

const Certifications: FC = () => {
  return (
    <ul className="flex flex-wrap gap-4">
      {certifications.map((certification) => (
        <li key={certification.name}>
          <a
            href={certification.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="w-24 sm:w-28"
              title={certification.name}
              src={certification.image}
              alt={certification.name}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Certifications;