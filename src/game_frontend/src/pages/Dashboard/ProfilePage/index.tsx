import React from "react";
import TabSwitch from "../../../components/Profile/ProfileTabs/TabSwitch";

interface Achievement {
  id: number;
  title: string;
}

interface Setting {
  id: number;
  title: string;
  language: string;
}

const AchievementsData: Achievement[] = [
  {
    id: 1,
    title: "No achievement yet",
  },
];

const SettingsData: Setting[] = [
  {
    id: 1,
    title: "Select language",
    language: "English",
  },
  {
    id: 2,
    title: "Setting",
    language: "",
  },
];

const ProfileTabs: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lg:w-[85%] md:w-[70%] w-full sm:mx-6  ">
      <TabSwitch
        achievementsData={AchievementsData}
        settingsData={SettingsData}
      />
    </div>
    </div>
  );
};

export default ProfileTabs;
