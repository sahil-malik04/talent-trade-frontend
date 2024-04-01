import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Mr. David is now available",
    },
    {
      id: 2,
      title: "Mr. Christ started the meeting",
    },
    {
      id: 3,
      title: "Mr. David want to confirm regarding your skillset",
    },
  ];
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        {notifications?.map((item) => (
          <Link
            to="#"
            className="text-gray-700 block px-4 py-2 text-sm font-semibold hover:bg-peacockblue-100 hover:text-white"
            tabIndex="-1"
            id={item?.id}
            key={item?.id}
          >
            <div className="flex items-center">
              <AccountCircleIcon fontSize="small" />{" "}
              <div className="ml-2"> {item?.title} </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
