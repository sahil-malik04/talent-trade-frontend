import { useRoutes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";
import { CreateAccountOptions } from "../views/auth/CreateAccount/CreateAccountOptions";
import { CreateAsStudentS1 } from "../views/auth/CreateAccount/student/CreateAsStudentS1";
import { CreateAsStudentS2 } from "../views/auth/CreateAccount/student/CreateAsStudentS2";
import { CreateAsInstructor } from "../views/auth/CreateAccount/instructor/CreateAsInstructor";

export const Router = () => {
  const routesArray = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/create-account", element: <CreateAccountOptions /> },
    { path: "/create-as-student-s1", element: <CreateAsStudentS1 /> },
    { path: "/create-as-student-s2", element: <CreateAsStudentS2 /> },
    { path: "/create-as-instructor", element: <CreateAsInstructor /> },
  ];
  const routes = useRoutes(routesArray);

  return routes;
};
