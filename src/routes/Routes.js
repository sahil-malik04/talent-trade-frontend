import { useRoutes } from "react-router-dom";
import { Home } from "../views/Home";

export const Router = () => {
  const routesArray = [{ path: "/", element: <Home /> }];
  const routes = useRoutes(routesArray);

  return routes;
};
