import { IRoute } from "../types/Route";
import { Home } from "../../pages";

export const routes: IRoute[] = [
  {
    name: "home",
    path: "/",
    component: Home,
    exact: true,
  },
];
