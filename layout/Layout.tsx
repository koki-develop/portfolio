import "@fontsource/inter";
import "./style.css";
import "./tailwind.css";
import clsx from "clsx";
import type { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useFontLoaded } from "./hooks";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const show = useFontLoaded("Inter");

  return (
    <div className={clsx({ hidden: !show })}>
      <Header />
      <main className="pt-4 pb-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
