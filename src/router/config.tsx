import { ComponentType } from "react";
import DefaultLayout from "../layouts/Default";
import Dashboard from "../pages/Dashboard";
import ClownList from "../components/ClownList";
import AddClown from "../components/AddClown";


export interface IRoute {
  path: string;
  exact: boolean;
  layout: ComponentType<any>;
  component?: ComponentType<any>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    component: Dashboard,
    layout: DefaultLayout,
    exact: true,
    private: false,
  },
  {
    path: "/clown-list",
    component: ClownList,
    layout: DefaultLayout,
    exact: true,
    private: false,
  },
  {
    path: "/add-list",
    component: AddClown,
    layout: DefaultLayout,
    exact: true,
    private: false,
  },
];
