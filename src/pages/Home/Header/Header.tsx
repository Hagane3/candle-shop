import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import classes from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const goToProductsPageHandler = () => {
    navigate("/products");
  };

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1>The nature candle</h1>
          <h2>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments .
          </h2>
          <div className={classes.btn_container}>
            <Button width={100} redirect={goToProductsPageHandler}>
              Discovery our collection
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
