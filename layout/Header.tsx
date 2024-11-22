import clsx from "clsx";
import type { FC } from "react";
import { usePageContext } from "vike-react/usePageContext";
import Container from "../components/Container";

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
      <Container className="flex items-center justify-between">
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
      </Container>
    </header>
  );
};

export default Header;
