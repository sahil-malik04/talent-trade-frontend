import React from "react";
import { learnerSidebarOptions } from "../../utils/dataUtility";
import { useNavigate } from "react-router-dom";

export const LearnerSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-peacockblue-100 sidebar">
      <ul>
        {learnerSidebarOptions?.map((item) => (
          <li
            className="mb-2 shadow-lg"
            key={item?.id}
            onClick={() => navigate(item?.link)}
          >
            <span> {item?.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
