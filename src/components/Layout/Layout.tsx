import Link from "@/components/util/Link";
import Section from "@/components/util/Section";
import {
  Box,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
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
            <Group spacing="xs">
              <Image src="/images/profile.png" width={40} alt="" />
              <Title weight="normal" size="h3">
                Koki Sato
              </Title>
            </Group>
          </Link>
        </Container>
      </Paper>

      {/* main */}
      <Box component="main">{children}</Box>

      <Divider />

      {/* footer */}
      <Box component="footer" py="lg">
        <Section>
          <Stack spacing="sm" align="center">
            <Text size="sm">&copy; 2023</Text>
            <Link href="/privacy">
              <Text size="sm">プライバシーポリシー</Text>
            </Link>
            <Link
              href="https://github.com/koki-develop/koki-develop.github.io"
              external
            >
              <Text size="sm">View on GitHub</Text>
            </Link>
          </Stack>
        </Section>
      </Box>
    </Box>
  );
});

Layout.displayName = "Layout";

export default Layout;
