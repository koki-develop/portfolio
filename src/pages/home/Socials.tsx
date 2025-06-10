import BlueSkyIcon from "../../images/icons/socials/bluesky.svg?react";
import GitHubIcon from "../../images/icons/socials/github.svg?react";
import XIcon from "../../images/icons/socials/x.svg?react";
import ZennIcon from "../../images/icons/socials/zenn.svg?react";

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
