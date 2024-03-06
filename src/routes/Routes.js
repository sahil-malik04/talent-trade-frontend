import { useRoutes } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/auth/Login";
import { CreateAccount } from "../views/auth/CreateAccount";

export const Router = () => {
  const routesArray = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/create-account", element: <CreateAccount /> },
  ];
  const routes = useRoutes(routesArray);

  return routes;
};
