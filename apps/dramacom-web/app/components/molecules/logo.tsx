import type React from "react";

type LogoComponentProps = {
  className?: string;
};

const LogoComponent: React.FC<LogoComponentProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <h1 className="text-5xl font-bold text-white">
        dramadotcom
        <div className="h-2 w-full bg-red-600 mt-2 rounded" />
      </h1>
    </div>
  );
};

export default LogoComponent;
