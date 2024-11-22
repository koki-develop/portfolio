import clsx from "clsx";
import type { FC } from "react";
import { usePageContext } from "vike-react/usePageContext";

const navItems = [
  { href: "/", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/notes", label: "Notes" },
];

const Header: FC = () => {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;

  return (
    <header className="sticky top-0 border-gray-700 border-b bg-gray-900 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between max-lg:px-4">
        <a className="font-bold text-xl sm:text-2xl" href="/">
          Koki Sato
        </a>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={clsx("text-lg", {
                  "font-bold text-white": urlPathname === item.href,
                  "text-gray-300": urlPathname !== item.href,
                })}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
