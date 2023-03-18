import { Box, Container, Sx, Title } from "@mantine/core";
import React, { memo } from "react";

export type SectionProps = {
  children: React.ReactNode;
  title?: string;
  sx?: Sx;
};

const Section: React.FC<SectionProps> = memo((props) => {
  const { children, title, sx } = props;

  return (
    <Container pt="md" pb="lg">
      {title && (
        <Title
          order={2}
          sx={(theme) => ({
            textAlign: "center",
            marginBottom: theme.spacing.xs,
          })}
        >
          {title}
        </Title>
      )}
      <Box sx={sx}>{children}</Box>
    </Container>
  );
});

Section.displayName = "Section";

export default Section;
