import {
  Paper as MantinePaper,
  PaperProps as MantinePaperProps,
  useMantineTheme,
} from "@mantine/core";
import { memo } from "react";

export type PaperProps = MantinePaperProps & {
  clickable?: boolean;
};

export const Paper: React.FC<PaperProps> = memo((props) => {
  const { clickable, ...paperProps } = props;

  const theme = useMantineTheme();

  return (
    <MantinePaper
      {...paperProps}
      sx={{
        ...(clickable && {
          transition: "0.15s",
          "&:hover": {
            backgroundColor: theme.colors.gray[1],
          },
        }),
        ...paperProps.sx,
      }}
    />
  );
});

Paper.displayName = "Paper";

export default Paper;
