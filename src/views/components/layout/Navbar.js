import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { removeUser } from "../../../store/reducers/userSlice";
import { toast } from "react-toastify";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notifications from "./Notifications";

export const Navbar = () => {
  const isUser = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isNotificationPopup, setNotificationPopup] = useState(false);

  return (
    <>
      <nav className="bg-peacockblue-100 p-5 text-white font-bold">
        <div className="flex">
          <div className="ml-4" onClick={() => navigate("/")}>
            <img
              className="h-8 w-14 rounded-full cursor-pointer"
              src="/assets/images/brand_logo.png"
              alt="brand-logo"
            />
          </div>
          <div className="ml-auto mr-14">
            {isUser ? (
              <ul className="flex space-x-6">
                <li
                  className="cursor-pointer"
                  onClick={() => setNotificationPopup(!isNotificationPopup)}
                >
                  <div className="relative inline-block text-left">
                    <div>
                      <NotificationsIcon />
                    </div>

                    {isNotificationPopup && <Notifications />}
                  </div>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(removeUser());
                    toast.success("You have successfully logged out");
                    navigate("/");
                  }}
                >
                  Logout
                </li>
              </ul>
            ) : (
              <ul className="flex space-x-6">
                <li className="cursor-pointer"> About Us</li>
                <li className="cursor-pointer"> Contact</li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
