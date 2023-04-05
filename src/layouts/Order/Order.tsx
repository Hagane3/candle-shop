import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Order;
