import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { Group, Text } from "@mantine/core";
import React, { memo } from "react";
import { IoChevronForward as ChevronRightIcon } from "react-icons/io5";

export type MoreLinkProps = {
  href: string;
};

const MoreLink: React.FC<MoreLinkProps> = memo((props) => {
  const { href } = props;

  return (
    <Link external href={href}>
      <Paper px="md" py="xs" clickable>
        <Group spacing="xs">
          <Text>More</Text>
          <ChevronRightIcon />
        </Group>
      </Paper>
    </Link>
  );
});

MoreLink.displayName = "MoreLink";

export default MoreLink;
