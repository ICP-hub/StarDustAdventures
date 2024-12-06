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
    <div>
      <TabSwitch
        achievementsData={AchievementsData}
        settingsData={SettingsData}
      />
    </div>
  );
};

export default ProfileTabs;
