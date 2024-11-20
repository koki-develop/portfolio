import { FaArrowRight } from "react-icons/fa6";
import Certifications from "./Certifications";
import Profile from "./Profile";
import Skills from "./Skills";

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
        <a
          href="/works"
          className="group w-full md:w-1/2 bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Works
            <FaArrowRight
              size={20}
              className="text-gray-400 group-hover:translate-x-1 transition-transform"
            />
          </h2>
          <p className="text-gray-300">今までにつくったもの。</p>
        </a>
        <a
          href="/notes"
          className="group w-full md:w-1/2 bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            Notes
            <FaArrowRight
              size={20}
              className="text-gray-400 group-hover:translate-x-1 transition-transform"
            />
          </h2>
          <p className="text-gray-300">最近書いた技術ブログ。</p>
        </a>
      </div>
    </div>
  );
}
