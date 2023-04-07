import classes from "./index.module.scss";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Form from "./Form/Form";
import SummaryCart from "../../components/SummaryCart/SummaryCart";

const index = () => {
  return (
    <main className={classes.root}>
      <SummaryCart />
      <Breadcrumbs />
      <Form />
    </main>
  );
};

export default index;
