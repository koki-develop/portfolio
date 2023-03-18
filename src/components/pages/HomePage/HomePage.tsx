import { config } from "@/../config";
import Icon from "@/components/util/Icon";
import ImageCard from "@/components/util/ImageCard";
import {
  Anchor,
  Box,
  Container,
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
    if (!router.isReady) {
      return null;
    }

    const tab = router.query.tab;
    switch (tab) {
      case "about":
      case "works":
      case "notes":
        return tab;
      default:
        return "about";
    }
  }, [router.isReady, router.query.tab]);

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
            <Title order={2}>{config.user.name}</Title>
            <Text>{config.user.tag}</Text>
          </Box>
        </Box>
        {/* description */}
        <Box>
          <Text sx={{ textAlign: "center", whiteSpace: "pre" }}>
            {config.user.description}
          </Text>
        </Box>
        {/* socials */}
        <Box sx={{ display: "flex", gap: 24 }}>
          {/* github */}
          <Anchor
            href={config.user.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="github" width={40} height={40} />
          </Anchor>
          {/* twitter */}
          <Anchor
            href={config.user.socials.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="twitter" width={40} height={40} />
          </Anchor>
          {/* zenn */}
          <Anchor
            href={config.user.socials.zenn.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="zenn" width={40} height={40} />
          </Anchor>
        </Box>
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
          <Container>
            <Title order={2} sx={{ textAlign: "center" }}>
              Skill
            </Title>
            {config.skillGroups.map((skillGroup) => (
              <Box key={skillGroup.name}>
                <Title order={3} sx={{ textAlign: "center", marginBottom: 16 }}>
                  {skillGroup.name}
                </Title>
                <Grid sx={{ marginBottom: 16 }}>
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
          </Container>
          <Divider />
          {/* certification */}
          <Container>
            <Title order={2} sx={{ textAlign: "center" }}>
              Certification
            </Title>
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
          </Container>
          <Divider />
          {/* experience */}
          <Container>
            <Title order={2} sx={{ textAlign: "center" }}>
              Experience
            </Title>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            </Box>
          </Container>
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default HomePage;
