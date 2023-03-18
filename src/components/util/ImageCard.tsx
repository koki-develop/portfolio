import Icon, { IconName } from "./Icon";
import Link from "@/components/util/Link";
import Paper from "@/components/util/Paper";
import {
  createStyles,
  CSSObject,
  Image,
  MantineTheme,
  Text,
} from "@mantine/core";
import React, { memo } from "react";

export type ImageCardProps = {
  name: string;
  href?: string;
} & (
  | {
      icon: IconName;
      src?: string;
    }
  | {
      icon?: undefined;
      src: string;
    }
);

const buildImageStyle = (theme: MantineTheme, size: "md" | "lg"): CSSObject => {
  const smallStyles = (() => {
    switch (size) {
      case "md":
        return { height: 50, maxWidth: "50%" };
      case "lg":
        return { height: 80, maxWidth: "50%" };
    }
  })();

  const defaultStyles = (() => {
    switch (size) {
      case "md":
        return { height: 60, maxWidth: "60%" };
      case "lg":
        return { height: 80, maxWidth: "80%" };
    }
  })();

  return {
    ...defaultStyles,
    marginBottom: 8,
    [theme.fn.smallerThan("sm")]: {
      ...smallStyles,
    },
  };
};

const useStyles = createStyles((theme) => ({
  icon: {
    ...buildImageStyle(theme, "md"),
  },
}));

const ImageCard: React.FC<ImageCardProps> = memo((props) => {
  const { name, href, src, icon } = props;

  const { classes } = useStyles();

  const component = (
    <Paper
      clickable
      px="md"
      py="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon ? (
        <Icon className={classes.icon} icon={icon} />
      ) : (
        <Image
          styles={(theme) => ({
            figure: {
              display: "flex",
              justifyContent: "center",
            },
            imageWrapper: {
              ...buildImageStyle(theme, "lg"),
              display: "flex",
              justifyContent: "center",
            },
          })}
          fit="contain"
          src={src}
          alt=""
        />
      )}
      <Text size="sm" sx={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
        {name}
      </Text>
    </Paper>
  );

  if (!href) {
    return component;
  }

  return (
    <Link href={href} external>
      {component}
    </Link>
  );
});

ImageCard.displayName = "ImageCard";

export default ImageCard;
