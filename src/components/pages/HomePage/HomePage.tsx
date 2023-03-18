import Socials from "./Socials";
import User from "./User";
import { config } from "@/../config";
import EmailButton from "@/components/util/EmailButton";
import Icon from "@/components/util/Icon";
import ImageCard from "@/components/util/ImageCard";
import Link from "@/components/util/Link";
import Section from "@/components/util/Section";
import { repositoryUrl } from "@/model/work";
import {
  Box,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Tabs,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { IoChevronForward as ChevronRightIcon } from "react-icons/io5";

dayjs.extend(relativeTime);

const HomePage: NextPage = () => {
  const router = useRouter();

  const activeTab = useMemo(() => {
    const tab = router.query.tab;
    switch (tab) {
      case "about":
      case "works":
      case "notes":
        return tab;
      default:
        return "about";
    }
  }, [router.query.tab]);

  const handleChangeTab = useCallback(
    (tab: string) => {
      router.replace({ query: { tab } }, undefined, { scroll: false });
    },
    [router]
  );

  return (
    <Box>
      <Stack spacing="lg" mb="md">
        <User user={config.user} />
        <Socials socials={config.user.socials} />
      </Stack>

      {/* tabs */}
      <Tabs value={activeTab} onTabChange={handleChangeTab}>
        <Tabs.List
          position="center"
          sx={(theme) => ({ marginBottom: theme.spacing.sm })}
        >
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="works">Works</Tabs.Tab>
          <Tabs.Tab value="notes">Notes</Tabs.Tab>
        </Tabs.List>

        {/* about */}
        <Tabs.Panel value="about">
          {/* skill */}
          <Section title="Skill">
            <Stack spacing="sm">
              {config.skillGroups.map((skillGroup) => (
                <Box key={skillGroup.name}>
                  <Title
                    order={3}
                    mb="sm"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {skillGroup.name}
                  </Title>
                  <Grid>
                    {skillGroup.skills.map((skill) => (
                      <Grid.Col span={6} sm={3} key={skill.name}>
                        <ImageCard
                          name={skill.name}
                          icon={skill.icon}
                          href={skill.url}
                        />
                      </Grid.Col>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Section>

          <Divider />

          {/* certification */}
          <Section title="Certification">
            <Grid>
              {config.certifications.map((certification) => (
                <Grid.Col span={6} sm={4} md={3} key={certification.name}>
                  <ImageCard
                    name={certification.name}
                    src={certification.imageSrc}
                    href={certification.url}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Section>

          <Divider />

          {/* experience */}
          <Section
            title="Experience"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Timeline>
              {config.experiences.map((experience) => (
                <Timeline.Item
                  key={experience.title}
                  title={experience.title}
                  active={Boolean(!experience.to)}
                  sx={(theme) => ({
                    "& .mantine-Timeline-itemBody": {
                      background: theme.white,
                      borderRadius: theme.radius.sm,
                      boxShadow: theme.shadows.sm,
                      padding: theme.spacing.md,
                      paddingBottom: theme.spacing.sm,
                    },
                  })}
                >
                  <Text size="sm" color="dimmed">
                    {experience.from} - {experience.to ?? "now"}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Section>
        </Tabs.Panel>

        <Tabs.Panel value="works">
          <Section
            title="Works"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.sm,
            })}
          >
            {config.workGroups.map((workGroup) => (
              <Box key={workGroup.name}>
                <Title
                  order={3}
                  sx={(theme) => ({
                    textAlign: "center",
                    marginBottom: theme.spacing.sm,
                  })}
                >
                  {workGroup.name}
                </Title>
                <Grid>
                  {workGroup.works.map((work) => (
                    <Grid.Col key={work.name} span={12} sm={6}>
                      <Card
                        shadow="sm"
                        sx={(theme) => ({
                          display: "flex",
                          flexDirection: "column",
                          gap: theme.spacing.sm,
                          height: "100%",
                        })}
                      >
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Link href={work.url ?? repositoryUrl(work)} external>
                            <Title order={4} size="h3">
                              {work.name}
                            </Title>
                          </Link>
                        </Box>

                        <Text sx={{ flexGrow: 1 }}>{work.description}</Text>

                        <Link href={repositoryUrl(work)} external>
                          <Text size="sm">View on GitHub</Text>
                        </Link>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link
                href={`${config.user.socials.github.url}?tab=repositories&type=source`}
                external
              >
                <Paper
                  px="md"
                  py="xs"
                  shadow="sm"
                  sx={(theme) => ({
                    transition: "0.15s",
                    "&:hover": {
                      backgroundColor: theme.colors.gray[2],
                    },
                  })}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Text>More</Text>
                    <ChevronRightIcon />
                  </Box>
                </Paper>
              </Link>
            </Box>
          </Section>
        </Tabs.Panel>

        <Tabs.Panel value="notes">
          <Section title="Notes">
            <Grid sx={(theme) => ({ marginBottom: theme.spacing.sm })}>
              {config.notes.map((note) => (
                <Grid.Col key={note.url} span={12} sm={6}>
                  <Link href={note.url} external>
                    <Card
                      shadow="sm"
                      sx={(theme) => ({
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "0.15s",
                        "&:hover": {
                          backgroundColor: theme.colors.gray[2],
                        },
                      })}
                    >
                      <Title
                        order={3}
                        size="h4"
                        weight="normal"
                        sx={(theme) => ({
                          flexGrow: 1,
                          marginBottom: theme.spacing.sm,
                        })}
                      >
                        {note.title}
                      </Title>
                      <Text
                        size="sm"
                        sx={{ display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <Icon icon="zenn" width={16} />
                        {dayjs(note.publishedAt).fromNow()}
                      </Text>
                    </Card>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link href={config.user.socials.zenn.url} external>
                <Paper
                  px="md"
                  py="xs"
                  shadow="sm"
                  sx={(theme) => ({
                    display: "inline-block",
                    transition: "0.15s",
                    "&:hover": {
                      backgroundColor: theme.colors.gray[2],
                    },
                  })}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Text>More</Text>
                    <ChevronRightIcon />
                  </Box>
                </Paper>
              </Link>
            </Box>
          </Section>
        </Tabs.Panel>
      </Tabs>

      <Divider />

      {/* contact */}
      <Section title="Contact">
        <Stack spacing="md">
          <Socials socials={config.user.socials} />
          <EmailButton email={config.user.email} />
        </Stack>
      </Section>
    </Box>
  );
};

export default HomePage;
