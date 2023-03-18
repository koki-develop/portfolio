import Section from "@/components/util/Section";
import {
  Anchor,
  Box,
  Container,
  Divider,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import React, { memo } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children } = props;

  return (
    <Box>
      {/* header */}
      <Paper p="sm" shadow="xs" radius={0} component="header">
        <Container sx={{ display: "flex" }}>
          <Link href="/">
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Image src="/images/profile.png" width={40} alt="" />
              <Title weight="normal" size="h3">
                Koki Sato
              </Title>
            </Box>
          </Link>
        </Container>
      </Paper>

      {/* main */}
      <Box component="main">{children}</Box>

      <Divider />

      {/* footer */}
      <Box component="footer" py="lg">
        <Section
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: theme.spacing.xs,
          })}
        >
          <Text size="sm">&copy; 2023</Text>
          <Link href="/privacy" passHref>
            <Text size="md">プライバシーポリシー</Text>
          </Link>
          <Anchor
            href="https://github.com/koki-develop/koki-develop.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text size="md">View on GitHub</Text>
          </Anchor>
        </Section>
      </Box>
    </Box>
  );
});

Layout.displayName = "Layout";

export default Layout;
