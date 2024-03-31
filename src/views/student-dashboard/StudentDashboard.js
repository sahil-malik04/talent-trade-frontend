import React, { useState } from "react";
import { StudentSidebar } from "./StudentSidebar";
import InstructorsList from "./InstructorsList";

export const StudentDashboard = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <>
      <div className="flex">
        <StudentSidebar setSelectedOption={setSelectedOption} />

        {selectedOption === 1 ? (
          <div>Dashboard</div>
        ) : selectedOption === 2 ? (
          <InstructorsList />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
