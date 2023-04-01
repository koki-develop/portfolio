import Link from "@/components/util/Link";
import { Container, Group, Image, Paper, Title } from "@mantine/core";
import React, { memo } from "react";

const LayoutHeader: React.FC = memo(() => {
  return (
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
  );
});

LayoutHeader.displayName = "LayoutHeader";

export default LayoutHeader;
