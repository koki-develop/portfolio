import "@fontsource/inter";
import "./style.css";
import "./tailwind.css";
import type { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-4 pb-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
