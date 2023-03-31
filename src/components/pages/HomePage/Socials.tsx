import Link from "@/components/util/Link";
import { Socials as SocialsModel } from "@/model/social";
import { Group, Image } from "@mantine/core";
import React, { memo } from "react";

export type SocialsProps = {
  socials: SocialsModel;
};

const Socials: React.FC<SocialsProps> = memo((props) => {
  const { socials } = props;

  return (
    <Group position="center">
      {Object.entries(socials).map(([, social]) => (
        <Link key={social.name} href={social.url} external>
          <Image
            src={social.imageSrc}
            width={40}
            height={40}
            alt={social.name}
          />
        </Link>
      ))}
    </Group>
  );
});

Socials.displayName = "Socials";

export default Socials;
