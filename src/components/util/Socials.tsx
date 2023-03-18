import Icon from "./Icon";
import Link from "@/components/util/Link";
import { Socials as SocialsModel } from "@/model/social";
import { Box } from "@mantine/core";
import React, { memo } from "react";

export type SocialsProps = {
  socials: SocialsModel;
};

const Socials: React.FC<SocialsProps> = memo((props) => {
  const { socials } = props;
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        gap: theme.spacing.lg,
      })}
    >
      {/* github */}
      <Link href={socials.github.url} external>
        <Icon icon="github" width={40} height={40} />
      </Link>
      {/* twitter */}
      <Link href={socials.twitter.url} external>
        <Icon icon="twitter" width={40} height={40} />
      </Link>
      {/* zenn */}
      <Link href={socials.zenn.url} external>
        <Icon icon="zenn" width={40} height={40} />
      </Link>
    </Box>
  );
});

Socials.displayName = "Socials";

export default Socials;
