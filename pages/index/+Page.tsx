import Profile from "./Profile";
import Qualifications from "./Qualifications";
import Skills from "./Skills";

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Profile />

      <div className="flex gap-8 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <Skills />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Qualifications</h2>
          <Qualifications />
        </div>
      </div>
    </div>
  );
}
