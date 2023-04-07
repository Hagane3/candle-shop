import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import OrderDetailsProduct from "../../components/SummaryCart/OrderDetailsProduct/OrderDetailsProduct";

const index = () => {
  const data = useSelector((state: any) => state);

  return (
    <main>
      <Breadcrumbs />
    </main>
  );
};

export default index;
