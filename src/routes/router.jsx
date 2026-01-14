import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import MyBids from "../pages/MyBids";
import CreateProduct from "../pages/CreateProduct";
import MyProducts from "../pages/MyProducts";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import { Suspense } from "react";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading></Loading>}>
            <Home></Home>
          </Suspense>
        ),
        loader: async () => {
          return fetch("http://localhost:3000/latest-products").then((res) =>
            res.json()
          );
        },
        hydrateFallbackElement: <Loading></Loading>,
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
        element: <AllProducts></AllProducts>,
        loader: async () => {
          return fetch("http://localhost:3000/all-products").then((res) =>
            res.json()
          );
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
        loader: async () => {
          return fetch("http://localhost:3000/all-products").then((res) =>
            res.json()
          );
        },
      },
      {
        path: "/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct></CreateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/product-details/:id",
        Component: ProductDetails,
        loader: async ({ params }) => {
          return fetch(`http://127.0.0.1:3000/details/${params.id}`).then(
            (res) => res.json()
          );
        },
      },
    ],
  },
]);

export default router;
