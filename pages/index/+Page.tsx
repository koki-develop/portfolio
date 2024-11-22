import type { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Card from "../../components/Card";
import Certifications from "./Certifications";
import Profile from "./Profile";
import Skills from "./Skills";

const links = [
  {
    href: "/works",
    title: "Works",
    description: "今までにつくったもの。",
  },
  {
    href: "/notes",
    title: "Notes",
    description: "最近書いた技術ブログ。",
  },
];

const Page: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <Profile />
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 font-bold text-2xl">Skills</h2>
          <Skills />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="mb-4 font-bold text-2xl">Certifications</h2>
          <Certifications />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        {links.map((link) => (
          <a key={link.href} className="group flex-grow" href={link.href}>
            <Card>
              <h2 className="mb-2 flex items-center gap-2 font-bold text-2xl">
                {link.title}
                <FaArrowRight
                  size={20}
                  className="text-gray-400 transition-transform group-hover:translate-x-1"
                />
              </h2>
              <p className="text-gray-300">{link.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
