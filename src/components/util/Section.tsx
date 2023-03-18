import { Box, Container, Title } from "@mantine/core";
import React, { memo } from "react";

export type SectionProps = {
  children: React.ReactNode;
  title: string;
};

const Section: React.FC<SectionProps> = memo((props) => {
  const { children, title } = props;

  return (
    <Container pt="md" pb="lg">
      <Title
        order={2}
        sx={(theme) => ({
          textAlign: "center",
          marginBottom: theme.spacing.xs,
        })}
      >
        {title}
      </Title>
      <Box>{children}</Box>
    </Container>
  );
});

Section.displayName = "Section";

export default Section;
