import { config } from "@/../config";
import EmailButton from "@/components/util/EmailButton";
import Icon from "@/components/util/Icon";
import ImageCard from "@/components/util/ImageCard";
import Section from "@/components/util/Section";
import Socials from "@/components/util/Socials";
import { repositoryUrl } from "@/model/work";
import {
  Anchor,
  Box,
  Card,
  Divider,
  Grid,
  Image,
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
      {/* user */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* avatar and name */}
        <Box>
          <Image src="/images/profile.png" width={150} height={150} alt="" />
          <Box sx={{ textAlign: "center" }}>
            <Title order={2} weight="normal">
              {config.user.name}
            </Title>
            <Text size="lg" color="gray">
              {config.user.tag}
            </Text>
          </Box>
        </Box>
        {/* description */}
        <Box>
          <Text sx={{ textAlign: "center", whiteSpace: "pre" }}>
            {config.user.description}
          </Text>
        </Box>
        {/* socials */}
        <Socials socials={config.user.socials} />
      </Box>

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
          <Section
            title="Skill"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.sm,
            })}
          >
            {config.skillGroups.map((skillGroup) => (
              <Box key={skillGroup.name}>
                <Title
                  order={3}
                  sx={(theme) => ({
                    textAlign: "center",
                    marginBottom: theme.spacing.sm,
                  })}
                >
                  {skillGroup.name}
                </Title>
                <Grid>
                  {skillGroup.skills.map((skill) => (
                    <Grid.Col span={6} sm={4} md={3} key={skill.name}>
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
                          <Anchor
                            href={work.url ?? repositoryUrl(work)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Title order={4} size="h3">
                              {work.name}
                            </Title>
                          </Anchor>
                        </Box>

                        <Text sx={{ flexGrow: 1 }}>{work.description}</Text>

                        <Anchor
                          href={repositoryUrl(work)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Text size="sm">View on GitHub</Text>
                        </Anchor>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Anchor
                href={`${config.user.socials.github.url}?tab=repositories&type=source`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card shadow="sm" sx={{ display: "inline-block" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Text>More</Text>
                    <ChevronRightIcon />
                  </Box>
                </Card>
              </Anchor>
            </Box>
          </Section>
        </Tabs.Panel>

        <Tabs.Panel value="notes">
          <Section title="Notes">
            <Grid sx={(theme) => ({ marginBottom: theme.spacing.sm })}>
              {config.notes.map((note) => (
                <Grid.Col key={note.url} span={12} sm={6}>
                  <Anchor
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card
                      shadow="sm"
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
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
                  </Anchor>
                </Grid.Col>
              ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Anchor
                href={config.user.socials.zenn.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card shadow="sm" sx={{ display: "inline-block" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Text>More</Text>
                    <ChevronRightIcon />
                  </Box>
                </Card>
              </Anchor>
            </Box>
          </Section>
        </Tabs.Panel>
      </Tabs>

      <Divider />

      {/* contact */}
      <Section
        title="Contact"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing.sm,
        })}
      >
        <Socials socials={config.user.socials} />
        <EmailButton email={config.user.email} />
      </Section>
    </Box>
  );
};

export default HomePage;
