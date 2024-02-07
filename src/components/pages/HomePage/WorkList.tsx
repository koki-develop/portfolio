import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import { Skill } from "@/model/skill";
import { repositoryUrl, Work } from "@/model/work";
import {
  Box,
  Card,
  Grid,
  Image,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
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
          <Card p="md">
            {work.imageSrc && (
              <Card.Section mb="xs">
                <Link external href={work.url ?? repositoryUrl(work)}>
                  <Image src={work.imageSrc} height={160} fit="cover" />
                </Link>
              </Card.Section>
            )}
            <Stack spacing="sm" sx={{ height: "100%" }}>
              <Box>
                <Box sx={{ display: "flex", marginBottom: 4 }}>
                  <Link external href={work.url ?? repositoryUrl(work)}>
                    <Title order={4} size="h3">
                      {work.name}
                    </Title>
                  </Link>
                </Box>

                <SkillGroup skills={work.skills} />
              </Box>

              <Text sx={{ flexGrow: 1 }}>{work.description}</Text>

              {work.repository && (
                <Box sx={{ display: "flex" }}>
                  <Link external href={repositoryUrl(work)}>
                    <Text size="sm">View on GitHub</Text>
                  </Link>
                </Box>
              )}
            </Stack>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
});

WorkList.displayName = "WorkList";

export default WorkList;

type SkillGroupProps = {
  skills: Skill[];
};

const SkillGroup: React.FC<SkillGroupProps> = memo((props) => {
  const { skills } = props;

  return (
    <Box sx={{ display: "flex" }}>
      {skills.map((skill, index) => (
        <Tooltip key={skill.name} label={skill.name} withArrow>
          <Paper
            sx={{
              zIndex: skills.length - index,
              borderRadius: "50%",
              overflow: "hidden",
              marginLeft: index !== 0 ? -8 : undefined,
            }}
          >
            <Image
              fit="contain"
              src={skill.imageSrc}
              height={26}
              width={26}
              alt={skill.name}
            />
          </Paper>
        </Tooltip>
      ))}
    </Box>
  );
});

SkillGroup.displayName = "SkillGroup";
