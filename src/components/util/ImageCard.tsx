import Icon, { IconName } from "./Icon";
import {
  Anchor,
  createStyles,
  CSSObject,
  Image,
  MantineTheme,
  Paper,
  Sx,
  Text,
} from "@mantine/core";
import React, { memo } from "react";

export type ImageCard = {
  name: string;
  href?: string;
  sx?: Sx;
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

const buildImageStyle = (
  theme: MantineTheme,
  height: [number, number]
): CSSObject => {
  return {
    height: height[1],
    maxWidth: "50%",
    marginBottom: 8,
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: height[0],
    },
  };
};

const useStyles = createStyles((theme) => ({
  icon: {
    ...buildImageStyle(theme, [50, 60]),
  },
}));

const ImageCard: React.FC<ImageCard> = memo((props) => {
  const { name, href, src, icon, sx } = props;

  const { classes } = useStyles();

  const component = (
    <Paper
      shadow="sm"
      p="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        ...(href && {
          transition: "0.15s",
          "&:hover": {
            backgroundColor: "ButtonShadow",
          },
        }),
        ...sx,
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
              ...buildImageStyle(theme, [80, 80]),
              display: "flex",
              justifyContent: "center",
            },
          })}
          fit="contain"
          src={src}
          alt=""
        />
      )}
      <Text>{name}</Text>
    </Paper>
  );

  if (!href) {
    return component;
  }

  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer">
      {component}
    </Anchor>
  );
});

ImageCard.displayName = "ImageCard";

export default ImageCard;
