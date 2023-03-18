import { Anchor, AnchorProps } from "@mantine/core";
import NextLink from "next/link";
import React, { memo } from "react";

export type LinkProps = {
  href: string;
  children: React.ReactNode;
} & (
  | ({
      external: true;
    } & AnchorProps)
  | {
      external?: false;
    }
);

const Link: React.FC<LinkProps> = memo((props) => {
  const { href, external, children, ...otherProps } = props;

  if (external) {
    return (
      <Anchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...otherProps}
      >
        {children}
      </Anchor>
    );
  }

  return <NextLink href={href}>{children}</NextLink>;
});

Link.displayName = "Link";

export default Link;
