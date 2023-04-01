import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import { Box, Divider } from "@mantine/core";
import React, { memo } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = memo((props) => {
  const { children } = props;

  return (
    <Box>
      <LayoutHeader />

      <Box component="main">{children}</Box>

      <Divider />

      <LayoutFooter />
    </Box>
  );
});

Layout.displayName = "Layout";

export default Layout;
