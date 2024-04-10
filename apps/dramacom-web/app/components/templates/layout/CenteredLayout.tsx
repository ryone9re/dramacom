// components/CenteredLayout.tsx
import type { FC, ReactNode } from "react";

interface CenteredLayoutProps {
  children: ReactNode;
}

const CenteredLayout: FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-darkgray items-center justify-center">
      <div className="bg-black w-3/5 h-full flex flex-col items-center gap-20">
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
