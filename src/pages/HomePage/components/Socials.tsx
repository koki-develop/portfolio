import BlueSkyIcon from "../assets/bluesky.svg?react";
import GitHubIcon from "../assets/github.svg?react";
import XIcon from "../assets/x.svg?react";
import ZennIcon from "../assets/zenn.svg?react";

const socialIconProps = {
  className: "text-white w-8",
};

const socials = [
  {
    name: "GitHub",
    icon: <GitHubIcon {...socialIconProps} />,
    href: "https://github.com/koki-develop",
  },
  {
    name: "X",
    icon: <XIcon {...socialIconProps} />,
    href: "https://x.com/koki_develop",
  },
  {
    name: "Bluesky",
    icon: <BlueSkyIcon {...socialIconProps} />,
    href: "https://bsky.app/profile/koki.me",
  },
  {
    name: "Zenn",
    icon: <ZennIcon {...socialIconProps} />,
    href: "https://zenn.dev/kou_pg_0131",
  },
];

export default function Socials() {
  return (
    <ul className="flex gap-2 sm:gap-4">
      {socials.map((social) => (
        <li key={social.href}>
          <a
            title={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
