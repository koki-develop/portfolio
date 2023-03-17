import { config } from "@/../config";
import Icon from "@/components/util/icon";
import {
  Anchor,
  Box,
  Container,
  Grid,
  Image,
  Paper,
  Tabs,
  Text,
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

  if (!router.isReady) {
    return null;
  }

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

        <Container>
          {/* about */}
          <Tabs.Panel value="about">
            {config.skillGroups.map((skillGroup) => (
              <Box key={skillGroup.name}>
                <Box>
                  <Title
                    order={2}
                    sx={{ textAlign: "center", marginBottom: 16 }}
                  >
                    {skillGroup.name}
                  </Title>
                </Box>
                <Box>
                  <Grid sx={{ marginBottom: 16 }}>
                    {skillGroup.skills.map((skill) => (
                      <Grid.Col span={6} sm={4} md={3} key={skill.name}>
                        <Anchor
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Paper
                            shadow="sm"
                            p="md"
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              transition: "0.15s",
                              "&:hover": {
                                backgroundColor: "ButtonShadow",
                              },
                            }}
                          >
                            <Icon
                              icon={skill.icon}
                              style={{ height: 80, maxWidth: "50%" }}
                            />
                            {skill.name}
                          </Paper>
                        </Anchor>
                      </Grid.Col>
                    ))}
                  </Grid>
                </Box>
              </Box>
            ))}
          </Tabs.Panel>
        </Container>
      </Tabs>
    </Box>
  );
};

export default HomePage;
