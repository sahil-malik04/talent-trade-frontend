import { useRoutes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";
import { CreateAccountOptions } from "../views/auth/CreateAccount/CreateAccountOptions";
import { CreateAsInstructor } from "../views/auth/CreateAccount/instructor/CreateAsInstructor";
import CreateAsStudentUI from "../views/auth/CreateAccount/student/CreateAsStudentUI";
import { SetNewPassword } from "../views/auth/SetNewPassword";
import { ForgotPassword } from "../views/auth/ForgotPassword";

export const Router = () => {
  const routesArray = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/create-account", element: <CreateAccountOptions /> },
    { path: "/create-as-student", element: <CreateAsStudentUI /> },
    { path: "/create-as-instructor", element: <CreateAsInstructor /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/set-new-password", element: <SetNewPassword /> },
  ];
  const routes = useRoutes(routesArray);

  return routes;
};
