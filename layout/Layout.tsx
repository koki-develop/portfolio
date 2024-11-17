import "./tailwind.css";
import type { FC, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default Layout;
