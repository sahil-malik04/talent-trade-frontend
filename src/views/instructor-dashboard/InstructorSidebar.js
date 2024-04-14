import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { insSidebarOptions } from "../../utils/dataUtility";

export const InstructorSidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="bg-peacockblue-100 ins_sidebar">
      <ul>
        {insSidebarOptions?.map((item) => (
          <li
            className={
              activeLink === item?.id
                ? "active_ins_sidebar mb-2 shadow-gray-400 shadow-sm"
                : "mb-2 shadow-gray-400 shadow-sm"
            }
            key={item?.id}
            onClick={() => {
              setActiveLink(item?.id);
              navigate(item?.link);
            }}
          >
            <span>{item?.icon}</span>
            <span> {item?.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
