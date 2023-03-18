import Icon, { IconName } from "./Icon";
import Link from "@/components/util/Link";
import {
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
  height: [number, number],
  maxWidth: [string, string]
): CSSObject => {
  return {
    height: height[1],
    maxWidth: maxWidth[1],
    marginBottom: 8,
    [theme.fn.smallerThan("sm")]: {
      height: height[0],
      maxWidth: maxWidth[0],
    },
  };
};

const useStyles = createStyles((theme) => ({
  icon: {
    ...buildImageStyle(theme, [50, 60], ["50%", "60%"]),
  },
}));

const ImageCard: React.FC<ImageCard> = memo((props) => {
  const { name, href, src, icon, sx } = props;

  const { classes } = useStyles();

  const component = (
    <Paper
      shadow="sm"
      px="md"
      py="sm"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        ...(href && {
          transition: "0.15s",
          "&:hover": {
            backgroundColor: theme.colors.gray[1],
          },
        }),
        ...sx,
      })}
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
              ...buildImageStyle(theme, [80, 80], ["50%", "80%"]),
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
