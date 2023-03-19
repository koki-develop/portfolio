import {
  Paper as MantinePaper,
  PaperProps as MantinePaperProps,
  useMantineTheme,
} from "@mantine/core";
import { forwardRef } from "react";

export type PaperProps = MantinePaperProps & {
  clickable?: boolean;
};

export const Paper: React.FC<PaperProps> = forwardRef<
  HTMLDivElement,
  PaperProps
>((props, ref) => {
  const { clickable, ...paperProps } = props;

  const theme = useMantineTheme();

  return (
    <MantinePaper
      ref={ref}
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
