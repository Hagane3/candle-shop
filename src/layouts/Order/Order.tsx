import { Outlet } from "react-router-dom";
import OrderNavbar from "./OrderNavbar/OrderNavbar";
import { ScrollToTop } from "../../utils/ScrollToTop";

const Order = () => {
  return (
    <ScrollToTop>
      <OrderNavbar />
      <Outlet />
    </ScrollToTop>
  );
};

export default Order;
