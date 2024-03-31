import React from "react";
import { studentSidebarOptions } from "../../utils/dataUtility";

export const StudentSidebar = ({setSelectedOption}) => {
  return (
    <div className="bg-peacockblue-100 sidebar">
      <ul>
        {studentSidebarOptions?.map((item) => (
          <li className="mt-2 shadow-lg" key={item?.id} onClick={()=> setSelectedOption(item?.id)}>
            <span> {item?.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
