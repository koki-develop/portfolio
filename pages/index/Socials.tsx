import type { FC } from "react";
import BlueSkyIcon from "../../assets/bluesky.svg?react";
import GitHubIcon from "../../assets/github.svg?react";
import XIcon from "../../assets/x.svg?react";
import ZennIcon from "../../assets/zenn.svg?react";

const socialIconProps = {
  className: "text-gray-100 transition hover:opacity-80",
  width: 32,
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
    name: "BlueSky",
    icon: <BlueSkyIcon {...socialIconProps} />,
    href: "https://bsky.app/profile/koki.me",
  },
  {
    name: "Zenn",
    icon: <ZennIcon {...socialIconProps} />,
    href: "https://zenn.dev/kou_pg_0131",
  },
];

const Socials: FC = () => {
  return (
    <ul className="flex gap-4">
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href} target="_blank" rel="noreferrer noopener">
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
