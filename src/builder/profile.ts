import { config } from "@/../config";
import { IconName } from "@/components/util/Icon";
import ejs from "ejs";
import fs from "fs";
import path from "path";

const iconPath = (icon: IconName): string =>
  ((
    {
      // skill
      aws: "skill/aws.svg",
      bubbletea: "skill/bubbletea.png",
      circleci: "skill/circleci.svg",
      cobra: "skill/cobra.png",
      cypress: "skill/cypress.svg",
      dagger: "skill/dagger.svg",
      docker: "skill/docker.svg",
      express: "skill/express.svg",
      gin: "skill/gin.svg",
      githubactions: "skill/githubactions.svg",
      go: "skill/go.svg",
      googlecloud: "skill/googlecloud.svg",
      javascript: "skill/javascript.svg",
      mantine: "skill/mantine.svg",
      materialui: "skill/materialui.svg",
      nextjs: "skill/nextjs.svg",
      react: "skill/react.svg",
      serverless: "skill/serverless.svg",
      tailwindcss: "skill/tailwindcss.svg",
      terraform: "skill/terraform.svg",
      typescript: "skill/typescript.svg",
      vecty: "skill/vecty.svg",
      vercel: "skill/vercel.svg",
      // social
      github: "social/github.svg",
      twitter: "social/twitter.svg",
      zenn: "social/zenn.svg",
    } as Record<IconName, string>
  )[icon]);

(async () => {
  const template = fs
    .readFileSync(path.join(__dirname, "profile.tmpl.md"))
    .toString();

  const readme = ejs.render(template, {
    config: {
      ...config,
      socials: {
        github: { ...config.socials.github, iconPath: iconPath("github") },
        twitter: { ...config.socials.twitter, iconPath: iconPath("twitter") },
        zenn: { ...config.socials.zenn, iconPath: iconPath("zenn") },
      },
      skillGroups: config.skillGroups.map((skillGroup) => ({
        ...skillGroup,
        skills: skillGroup.skills.map((skill) => ({
          ...skill,
          iconPath: iconPath(skill.icon),
        })),
      })),
    },
  });
  fs.writeFileSync("profile.md", readme);
})();
