import { config } from "@/../config";
import EmailButton from "@/components/util/EmailButton";
import ImageCard from "@/components/util/ImageCard";
import Section from "@/components/util/Section";
import Socials from "@/components/util/Socials";
import {
  Box,
  Divider,
  Grid,
  Image,
  Tabs,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
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
      router.replace({ query: { tab } });
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
        <Tabs.List position="center" sx={{ marginBottom: 8 }}>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="works">Works</Tabs.Tab>
          <Tabs.Tab value="notes">Notes</Tabs.Tab>
        </Tabs.List>

        {/* about */}
        <Tabs.Panel value="about">
          {/* skill */}
          <Section title="Skill">
            {config.skillGroups.map((skillGroup) => (
              <Box
                key={skillGroup.name}
                sx={(theme) => ({ marginBottom: theme.spacing.sm })}
              >
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
        </Tabs.Panel>

        <Tabs.Panel value="works">
          <Section title="Works">
            <Text sx={{ textAlign: "center" }}>🚧準備中🚧</Text>
          </Section>
        </Tabs.Panel>

        <Tabs.Panel value="notes">
          <Section title="Notes">
            <Text sx={{ textAlign: "center" }}>🚧準備中🚧</Text>
          </Section>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default HomePage;
