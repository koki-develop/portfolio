import "./style.css";
import "./tailwind.css";
import type { FC, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="container mx-auto py-16 px-4">{children}</main>
    </>
  );
};

export default Layout;
