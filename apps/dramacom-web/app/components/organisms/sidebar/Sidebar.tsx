// components/Sidebar.tsx
import type React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="drawer-side bg-darkgray">
      <label htmlFor="my-drawer" className="drawer-overlay" />
      <ul className="menu p-4 overflow-y-auto w-32  text-white">
        {/* Sidebar content here, like navigation items */}
      </ul>
    </div>
  );
};

export default Sidebar;
