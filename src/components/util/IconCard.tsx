import Icon, { IconName } from "./Icon";
import { createStyles, Paper, Sx, Text } from "@mantine/core";
import React, { memo } from "react";

export type IconCardProps = {
  name: string;
  icon: IconName;

  sx?: Sx;
};

const useStyles = createStyles((theme) => ({
  icon: {
    height: 60,
    maxWidth: "50%",
    marginBottom: 4,
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      height: 50,
    },
  },
}));

const IconCard: React.FC<IconCardProps> = memo((props) => {
  const { name, icon, sx } = props;

  const { classes } = useStyles();

  return (
    <Paper
      shadow="sm"
      p="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...sx,
      }}
    >
      <Icon className={classes.icon} icon={icon} />
      <Text>{name}</Text>
    </Paper>
  );
});

IconCard.displayName = "IconCard";

export default IconCard;
