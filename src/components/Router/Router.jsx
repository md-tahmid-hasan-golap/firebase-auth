import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
