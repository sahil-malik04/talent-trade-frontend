import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  if (
    path !== "/login" &&
    path !== "/create-account" &&
    path !== "/create-as-student" &&
    path !== "/create-as-instructor" &&
    path !== "/forgot-password" &&
    path !== "/set-new-password"
  )
    return (
      <div className="bg-peacockblue-100  text-white mt-4">
        <div className="flex justify-around items-center h-64">
          <div className="" onClick={() => navigate("/")}>
            <img
              className="h-24 w-24 rounded-full cursor-pointer"
              src="/assets/images/brand_logo.png"
              alt="brand-logo"
            />
          </div>
          <div className="footer">
            <h4 className="p-3 font-bold font-serif"> Resources </h4>
            <ul>
              <li>
                <span> Community </span>
              </li>
              <li>
                <span> Become a partner </span>
              </li>
            </ul>
          </div>
          <div className="footer">
            <h4 className="p-3 font-bold font-serif"> Support </h4>
            <ul>
              <li>
                <span> Contact Us </span>
              </li>
              <li>
                <span> Terms of Use </span>
              </li>
              <li>
                <span> Privacy Policy </span>
              </li>
            </ul>
          </div>
          <div className="cursor-default">
            From <span className="ml-1">🇮🇳</span>
          </div>
        </div>
      </div>
    );
};

export default Footer;
