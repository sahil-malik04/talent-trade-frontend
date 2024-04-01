import React from "react";
import { learnerSidebarOptions } from "../../utils/dataUtility";

export const LearnerSidebar = ({setSelectedOption}) => {
  return (
    <div className="bg-peacockblue-100 sidebar">
      <ul>
        {learnerSidebarOptions?.map((item) => (
          <li className="mt-2 shadow-lg" key={item?.id} onClick={()=> setSelectedOption(item?.id)}>
            <span> {item?.title} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
