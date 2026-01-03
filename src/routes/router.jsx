import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/sign-up",
        Component: Signup,
      },
    ],
  },
]);

export default router;
