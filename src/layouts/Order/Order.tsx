import { Outlet } from "react-router-dom";
import OrderNavbar from "./OrderNavbar/OrderNavbar";

const Order = () => {
  return (
    <div>
      <OrderNavbar />
      <Outlet />
    </div>
  );
};

export default Order;
