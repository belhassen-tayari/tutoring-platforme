import React, { ReactNode } from "react";

interface RightSectionProps {
  children: ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ children }) => {
  return (
    <div className="p-4 sm:ml-64 w-full h-full">
      <div className="p-4 h-full">{children}</div>
    </div>
  );
};

export default RightSection;
