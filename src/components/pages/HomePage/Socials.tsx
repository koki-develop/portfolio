import Icon, { IconName } from "@/components/util/Icon";
import Link from "@/components/util/Link";
import { Socials as SocialsModel } from "@/model/social";
import { Group } from "@mantine/core";
import React, { memo, useMemo } from "react";

export type SocialsProps = {
  socials: SocialsModel;
};

type Item = {
  url: string;
  icon: IconName;
};

const Socials: React.FC<SocialsProps> = memo((props) => {
  const { socials } = props;

  const items = useMemo((): Item[] => {
    return [
      { url: socials.github.url, icon: "github" },
      { url: socials.twitter.url, icon: "twitter" },
      { url: socials.zenn.url, icon: "zenn" },
    ];
  }, [socials.github.url, socials.twitter.url, socials.zenn.url]);

  return (
    <Group position="center">
      {items.map((item) => (
        <Link key={item.icon} href={socials.github.url} external>
          <Icon icon={item.icon} width={40} height={40} />
        </Link>
      ))}
    </Group>
  );
});

Socials.displayName = "Socials";

export default Socials;
