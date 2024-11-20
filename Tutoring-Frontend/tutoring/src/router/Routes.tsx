// src/routes.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Student from "../pages/student/Student";
import Teacher from "../pages/teacher/Teacher";
import NotFound from "../pages/not-found/NotFound";
import Landing from "@/pages/landing/Landing";
import MainLayout from "@/pages/home/components/MainLayout";
import Dashboard from "@/pages/home/sections/Dashboard";
import Inbox from "@/pages/home/sections/Inbox";
import Teachers from "@/pages/home/sections/Teachers";
import Settings from "@/pages/home/sections/Settings";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} />
      {/* Set the Dashboard as the default route for /home */}
      <Route path="/home" element={<MainLayout />}>
        <Route index element={<Dashboard />} />{" "}
        {/* Load Dashboard by default */}
        <Route path="dashboard" element={<Dashboard />} />{" "}
        <Route path="inbox" element={<Inbox />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="settings" element={<Settings />} />
        {/* Dashboard route */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
