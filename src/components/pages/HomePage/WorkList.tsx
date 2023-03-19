import Icon from "@/components/util/Icon";
import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { repositoryUrl, Work } from "@/model/work";
import { Box, Grid, Stack, Text, Title, Tooltip } from "@mantine/core";
import React, { memo } from "react";

export type WorkListProps = {
  works: Work[];
};

const WorkList: React.FC<WorkListProps> = memo((props) => {
  const { works } = props;

  return (
    <Grid>
      {works.map((work) => (
        <Grid.Col key={work.name} span={12} sm={6}>
          <Paper p="md" sx={{ height: "100%" }}>
            <Stack spacing="sm" sx={{ height: "100%" }}>
              <Box>
                <Box sx={{ display: "flex", marginBottom: 4 }}>
                  <Link external href={work.url ?? repositoryUrl(work)}>
                    <Title order={4} size="h3">
                      {work.name}
                    </Title>
                  </Link>
                </Box>

                <Box sx={{ display: "flex" }}>
                  {work.skills.map((skill, index) => (
                    <Tooltip key={skill.name} label={skill.name} withArrow>
                      <Paper
                        sx={{
                          zIndex: work.skills.length - index,
                          borderRadius: "50%",
                          height: 28,
                          width: 28,
                          overflow: "hidden",
                          marginLeft: index !== 0 ? -8 : undefined,
                        }}
                      >
                        <Icon icon={skill.icon} height="100%" width="100%" />
                      </Paper>
                    </Tooltip>
                  ))}
                </Box>
              </Box>

              <Text sx={{ flexGrow: 1 }}>{work.description}</Text>

              <Box sx={{ display: "flex" }}>
                <Link external href={repositoryUrl(work)}>
                  <Text size="sm">View on GitHub</Text>
                </Link>
              </Box>
            </Stack>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
});

WorkList.displayName = "WorkList";

export default WorkList;
