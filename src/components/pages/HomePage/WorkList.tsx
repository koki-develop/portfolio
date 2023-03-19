import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { repositoryUrl, Work } from "@/model/work";
import { Box, Grid, Text, Title, useMantineTheme } from "@mantine/core";
import React, { memo } from "react";

export type WorkListProps = {
  works: Work[];
};

const WorkList: React.FC<WorkListProps> = memo((props) => {
  const { works } = props;

  const theme = useMantineTheme();

  return (
    <Grid>
      {works.map((work) => (
        <Grid.Col key={work.name} span={12} sm={6}>
          <Paper
            p="md"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.sm,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Link external href={work.url ?? repositoryUrl(work)}>
                <Title order={4} size="h3">
                  {work.name}
                </Title>
              </Link>
            </Box>

            <Text sx={{ flexGrow: 1 }}>{work.description}</Text>

            <Box>
              <Link external href={repositoryUrl(work)}>
                <Text size="sm">View on GitHub</Text>
              </Link>
            </Box>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
});

WorkList.displayName = "WorkList";

export default WorkList;
