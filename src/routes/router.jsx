import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyBids from "../pages/MyBids";
import CreateProduct from "../pages/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/sign-up",
        Component: Signup,
      },
      {
        path: "/all-products",
        Component: AllProducts,
      },
      {
        path: "/my-bids",
        Component: MyBids,
      },
      {
        path: "/create-product",
        Component: CreateProduct,
      },
    ],
  },
]);

export default router;
