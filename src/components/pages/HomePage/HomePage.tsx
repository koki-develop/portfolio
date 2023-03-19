import CertificationList from "./CertificationList";
import EmailButton from "./EmailButton";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillList from "./SkillList";
import Socials from "./Socials";
import User from "./User";
import WorkList from "./WorkList";
import { config } from "@/../config";
import Icon from "@/components/util/Icon";
import Link from "@/components/util/Link";
import Section from "@/components/util/Section";
import {
  Box,
  Card,
  Divider,
  Grid,
  Paper,
  Stack,
  Tabs,
  Text,
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
          <Section title="Skill">
            <Stack spacing="sm">
              {config.skillGroups.map((skillGroup) => (
                <Box key={skillGroup.name}>
                  <Title order={3} mb="sm" sx={{ textAlign: "center" }}>
                    {skillGroup.name}
                  </Title>
                  <SkillList skills={skillGroup.skills} />
                </Box>
              ))}
            </Stack>
          </Section>

          <Divider />

          <Section title="Certification">
            <CertificationList certifications={config.certifications} />
          </Section>

          <Divider />

          <Section
            title="Experience"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ExperienceTimeline experiences={config.experiences} />
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
                <WorkList works={workGroup.works} />
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
