import AWSDOPPng from "../assets/aws-dop.png";
import AWSDVAPng from "../assets/aws-dva.png";
import AWSSAAPng from "../assets/aws-saa.png";
import AWSSAPPng from "../assets/aws-sap.png";
import AWSSOAPng from "../assets/aws-soa.png";

type Certification = {
  name: string;
  image: string;
  href: string;
};

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    image: AWSSAPPng,
    href: "https://www.credly.com/badges/77ea1b7d-d676-4b47-a099-a1152e7b0cd7/public_url",
  },
  {
    name: "AWS Certified DevOps Engineer - Professional",
    image: AWSDOPPng,
    href: "https://www.credly.com/badges/acb69e55-f79c-428c-a706-ba1e741980b4/public_url",
  },
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
];

export default function Certifications() {
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
}
