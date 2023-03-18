import { Box } from "@mantine/core";
import React, { memo } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children } = props;

  return (
    <Box>
      {/* main */}
      <Box component="main">{children}</Box>

      {/* footer */}
      <footer>footer</footer>
    </Box>
  );
});

Layout.displayName = "Layout";

export default Layout;
