// components/Header.tsx
import type React from "react";
import LogoComponent from "~/components/molecules/logo";

const Header: React.FC = () => {
  return (
    <header className="navbar bg-black text-white">
      <div className="flex-1 justify-center">
        <LogoComponent />
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label className="btn btn-ghost btn-circle">
            <div className="indicator">{/* ユーザーのアイコンなど */}</div>
          </label>
          {/* ドロップダウンのメニューなど　*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
