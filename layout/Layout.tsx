import "./style.css";
import "./tailwind.css";
import type { FC, ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className="max-w-4xl mx-auto py-16 max-lg:px-4">{children}</main>
    </>
  );
};

export default Layout;
