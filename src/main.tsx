import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import Home from "./pages/Home/index";
import SingleProduct from "./pages/SingleProduct/index";
import Cart from "./pages/Cart/index";

import Order from "./layouts/Order/Order";
import Details from "./pages/Details/index";
import Shipping from "./pages/Shipping/index";
import Payment from "./pages/Payment/index";

import App from "./App";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/order",
    element: <Order />,
    children: [
      {
        path: "/order/details",
        element: <Details />,
      },
      {
        path: "/order/shipping",
        element: <Shipping />,
      },
      {
        path: "/order/payment",
        element: <Payment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
