import { Outlet } from "react-router-dom";
import OrderNavbar from "./OrderNavbar/OrderNavbar";

const Order = () => {
  return (
    <>
      <OrderNavbar />
      <Outlet />
    </>
  );
};

export default Order;
