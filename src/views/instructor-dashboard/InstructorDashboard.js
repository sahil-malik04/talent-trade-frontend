import React from "react";
import { InstructorSidebar } from "./InstructorSidebar";
import { Outlet } from "react-router-dom";

export const InstructorDashboard = () => {
  return (
    <div className="flex">
      <InstructorSidebar />
      <Outlet />
    </div>
  );
};
