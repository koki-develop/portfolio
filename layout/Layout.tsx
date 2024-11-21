import "@fontsource/inter";
import "./style.css";
import "./tailwind.css";
import type { FC, ReactNode } from "react";
import Header from "./Header";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl py-4 max-lg:px-4">{children}</main>
    </>
  );
};

export default Layout;
