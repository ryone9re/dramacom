// components/Sidebar.tsx
import type React from "react";
import { HomeIcon, SearchIcon } from "~/components/atoms/icons";

const Sidebar: React.FC = () => {
  return (
    <div className="drawer-side bg-darkgray">
      <label htmlFor="my-drawer" className="drawer-overlay" />
      <ul className="menu p-4 overflow-y-auto w-32  text-white flex flex-col items-center pt-20">
        <HomeIcon className="w-10 h-10 opacity-70 mb-10" />
        <SearchIcon className="w-10 h-10 opacity-70 mb-10" />
      </ul>
    </div>
  );
};

export default Sidebar;
