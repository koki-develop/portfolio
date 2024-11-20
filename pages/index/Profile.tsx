import type { FC } from "react";
import ProfilePng from "../../assets/profile.png";
import Socials from "./Socials";

const profile = {
  name: "Koki Sato",
  description: "埼玉県在住の 26 歳。のんびり生きています。",
};

const Profile: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center sm:items-center">
      <div className="flex justify-center">
        <div className="w-44 bg-white rounded-full">
          <img className="w-full" src={ProfilePng} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold whitespace-pre-wrap">
            {profile.name}
          </h1>
          <p className="whitespace-pre-wrap">{profile.description}</p>
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Profile;
