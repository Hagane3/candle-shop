import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { Product } from "../../store/products-slice";

import { addItem } from "../../store/cart-slice";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./index.module.scss";

import QuantityBox from "../../components/UI/QuantityBox/QuantityBox";
import Subscription from "../../components/UI/Subscription/Subscription";
import Button from "../../components/UI/Button/Button";

const index = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState(1);
  const { allProducts } = useSelector((state: RootState) => state.products);
  const { id } = useParams();

  useEffect(() => {
    setProduct(allProducts.find((product: Product) => product.id === id));
  }, [id]);

  return (
    <main className={classes.root}>
      {product && (
        <>
          <div className={classes.product}>
            <h5>{`${product.name}®`}</h5>
            <div className={classes.product_image}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={classes.price_quantity}>
              <span className={classes.price}>{`$ ${product.price}`}</span>
              <div className={classes.quantity}>
                <QuantityBox
                  setQuantityHandler={setQuantity}
                  quantity={quantity}
                />
              </div>
            </div>
          </div>
          <Subscription />
          <div className={classes.btn_container}>
            <Link
              to="/cart"
              onClick={() => {
                dispatch(addItem({ ...product, quantity: quantity }));
              }}
            >
              <Button width={100}>Add to cart</Button>
            </Link>
          </div>
          <div className={classes.details_container}>
            <p>
              <strong>Wax:</strong>Top grade Soy wax that delivers a smoke less,
              consistent burn
            </p>
            <p>
              <strong>Fragrance:</strong>Premium quality ingredients with
              natural essential oils
            </p>
            <p>
              <strong>Burning Time:</strong>70-75 hours
            </p>
            <p>
              <strong>Dimension</strong>10cm x 5cm
            </p>
            <p>
              <strong>Weight:</strong>400g
            </p>
          </div>
          <div className={classes.description}>
            <h6>
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.{" "}
            </h6>
            <p>FREE SHIPPING</p>
          </div>
        </>
      )}
    </main>
  );
};

export default index;
