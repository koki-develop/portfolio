import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";

const navItems = [
  { href: "/", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/notes", label: "Notes" },
];

export default function Header() {
  const location = useLocation();
  const urlPathname = location.pathname;

  return (
    <header className="sticky top-0 border-gray-700 border-b bg-gray-900 py-4">
      <Container className="flex items-center justify-between">
        <Link className="font-bold text-xl md:text-2xl" to="/">
          Koki Sato
        </Link>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className={clsx("text-lg", {
                  "font-bold text-white": urlPathname === item.href,
                  "text-gray-300": urlPathname !== item.href,
                })}
                to={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
