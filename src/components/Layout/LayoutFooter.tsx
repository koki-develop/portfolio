import Link from "@/components/util/Link";
import Section from "@/components/util/Section";
import { Box, Stack, Text } from "@mantine/core";
import React, { memo } from "react";

const LayoutFooter: React.FC = memo(() => {
  return (
    <Box component="footer" py="lg">
      <Section>
        <Stack spacing="sm" align="center">
          <Text size="sm">&copy; 2023</Text>
          <Link href="/privacy">
            <Text size="sm">プライバシーポリシー</Text>
          </Link>
          <Link href="https://github.com/koki-develop/portfolio" external>
            <Text size="sm">View on GitHub</Text>
          </Link>
        </Stack>
      </Section>
    </Box>
  );
});

LayoutFooter.displayName = "LayoutFooter";

export default LayoutFooter;
