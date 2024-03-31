import { useRoutes } from "react-router-dom";
import { AuthRoutes } from "./AuthRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const Router = () => {
  const routesArray = [...AuthRoutes, ...DashboardRoutes];
  const routes = useRoutes(routesArray);

  return routes;
};
