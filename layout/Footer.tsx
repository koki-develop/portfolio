import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 pb-24">
      <small>&copy; 2024 Koki Sato</small>

      <a
        href="https://github.com/koki-develop/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </footer>
  );
};

export default Footer;
