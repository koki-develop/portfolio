import { Anchor } from "@mantine/core";
import NextLink from "next/link";
import React, { memo } from "react";

export type LinkProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = memo((props) => {
  const { href, external, children } = props;

  if (external) {
    return (
      <Anchor href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Anchor>
    );
  }

  return <NextLink href={href}>{children}</NextLink>;
});

Link.displayName = "Link";

export default Link;
