import "@fontsource/inter";
import "./style.css";
import "./tailwind.css";
import clsx from "clsx";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useFontLoaded } from "./hooks";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const show = useFontLoaded("Inter");

  return (
    <div
      className={clsx(
        "min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
        { hidden: !show },
      )}
    >
      <Header />
      <main className="pt-4 pb-16">{children}</main>
      <Footer />
    </div>
  );
}
