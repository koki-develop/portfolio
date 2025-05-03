import AWSIcon from "../../public/images/icons/skills/aws.svg?react";
import FirebaseIcon from "../../public/images/icons/skills/firebase.svg?react";
import GoIcon from "../../public/images/icons/skills/go.svg?react";
import GoogleCloudIcon from "../../public/images/icons/skills/googlecloud.svg?react";
import JavaScriptIcon from "../../public/images/icons/skills/javascript.svg?react";
import NextJSIcon from "../../public/images/icons/skills/nextjs.svg?react";
import ReactIcon from "../../public/images/icons/skills/react.svg?react";
import RubyIcon from "../../public/images/icons/skills/ruby.svg?react";
import TerraformIcon from "../../public/images/icons/skills/terraform.svg?react";
import TypeScriptIcon from "../../public/images/icons/skills/typescript.svg?react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

const skillIconProps = {
  width: 20,
  height: 20,
};

const skills: Skill[] = [
  {
    name: "Go",
    icon: <GoIcon {...skillIconProps} />,
    href: "https://golang.org",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon {...skillIconProps} />,
    href: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon {...skillIconProps} />,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Ruby",
    icon: <RubyIcon {...skillIconProps} />,
    href: "https://www.ruby-lang.org",
  },
  {
    name: "React",
    icon: <ReactIcon {...skillIconProps} />,
    href: "https://reactjs.org",
  },
  {
    name: "Next.js",
    icon: <NextJSIcon {...skillIconProps} />,
    href: "https://nextjs.org",
  },
  {
    name: "Terraform",
    icon: <TerraformIcon {...skillIconProps} />,
    href: "https://www.terraform.io",
  },
  {
    name: "AWS",
    icon: <AWSIcon {...skillIconProps} />,
    href: "https://aws.amazon.com",
  },
  {
    name: "Google Cloud",
    icon: <GoogleCloudIcon {...skillIconProps} />,
    href: "https://console.cloud.google.com",
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon {...skillIconProps} />,
    href: "https://firebase.google.com",
  },
];

export default function Skills() {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill.name}>
          <a
            className="flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-800 px-2 py-1 text-white"
            href={skill.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
