import CertificationList from "./CertificationList";
import EmailButton from "./EmailButton";
import ExperienceTimeline from "./ExperienceTimeline";
import MoreLink from "./MoreLink";
import NoteList from "./NoteList";
import SkillList from "./SkillList";
import Socials from "./Socials";
import User from "./User";
import WorkList from "./WorkList";
import { config } from "@/../config";
import Section from "@/components/util/Section";
import { Box, Divider, Stack, Tabs, Title } from "@mantine/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

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
              <MoreLink
                href={`${config.user.socials.github.url}?tab=repositories&type=source`}
              />
            </Box>
          </Section>
        </Tabs.Panel>

        <Tabs.Panel value="notes">
          <Section
            title="Notes"
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing.sm,
            })}
          >
            <NoteList notes={config.notes} />

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <MoreLink href={config.user.socials.zenn.url} />
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
