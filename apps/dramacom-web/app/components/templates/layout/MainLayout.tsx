import type React from "react";
import Header from "~/components/organisms/header/Header";
import Sidebar from "~/components/organisms/sidebar/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <main className="flex-grow p-4 bg-black text-white gap-10 flex flex-col">
          {children}
        </main>
      </div>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
