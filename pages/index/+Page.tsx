import { FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
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

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Profile />

      <div className="flex gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <Skills />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <Certifications />
        </div>
      </div>

      <div className="flex gap-8 flex-col md:flex-row">
        {links.map((link) => (
          <a key={link.href} className="group flex-grow" href={link.href}>
            <Card>
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                {link.title}
                <FaArrowRight
                  size={20}
                  className="text-gray-400 group-hover:translate-x-1 transition-transform"
                />
              </h2>
              <p className="text-gray-300">{link.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
