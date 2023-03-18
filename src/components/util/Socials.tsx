import Icon from "./Icon";
import { Socials as SocialsModel } from "@/model/social";
import { Anchor, Box } from "@mantine/core";
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
      <Anchor
        href={socials.github.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="github" width={40} height={40} />
      </Anchor>
      {/* twitter */}
      <Anchor
        href={socials.twitter.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="twitter" width={40} height={40} />
      </Anchor>
      {/* zenn */}
      <Anchor href={socials.zenn.url} target="_blank" rel="noopener noreferrer">
        <Icon icon="zenn" width={40} height={40} />
      </Anchor>
    </Box>
  );
});

Socials.displayName = "Socials";

export default Socials;
