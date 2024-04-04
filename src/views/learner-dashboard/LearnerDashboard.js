import React from "react";
import { LearnerSidebar } from "./LearnerSidebar";
import { Outlet } from "react-router-dom";

export const LearnerDashboard = () => {
  return (
    <>
      <div className="flex">
        <LearnerSidebar />
        <Outlet />
      </div>
    </>
  );
};
