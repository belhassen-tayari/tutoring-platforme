import React from "react";
import { Outlet } from "react-router-dom";
import RightSection from "./RightSection";
import SideBar from "@/components/common/SideBar";
const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Right Section */}
      <div className="flex h-full w-full">
        <RightSection>
          <Outlet />
        </RightSection>
      </div>
    </div>
  );
};

export default MainLayout;
