import React, { useState } from "react";
import { LearnerSidebar } from "./LearnerSidebar";
import InstructorsList from "./InstructorsList";
import ScheduleMeetings from "./ScheduleMeetings";

export const LearnerDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <>
      <div className="flex">
        <LearnerSidebar setSelectedOption={setSelectedOption} />

        {selectedOption === 1 ? (
          <div>Dashboard</div>
        ) : selectedOption === 2 ? (
          <InstructorsList />
        ) : selectedOption === 3 ? (
          <ScheduleMeetings />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
