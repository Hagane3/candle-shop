import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import ProductItem from "../ProductItem/ProductItem";

import classes from "./Products.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setIsLoading, Product } from "../../store/products-slice";

import { RootState } from "../../store/index";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [visibleProducts, setVisibleProducts] = useState(2);

  const { isLoading, allProducts } = useSelector(
    (state: RootState) => state.products
  );

  const fetchProducts = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const showAllProductsHandler = () => {
    setVisibleProducts(allProducts.length);
  };

  useEffect(() => {
    dispatch(setIsLoading(true));
    fetchProducts(import.meta.env.VITE_API_URL);
    dispatch(setIsLoading(false));
  }, []);

  return (
    <section className={classes.root}>
      <h3>Products</h3>
      <h4>Order it for you or for your beloved ones.</h4>
      <div className={classes.products}>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          allProducts.slice(0, visibleProducts).map((product: Product) => {
            return (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <ProductItem
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </div>
            );
          })
        )}
      </div>
      {visibleProducts < allProducts.length && (
        <Button width={50} showAllProducts={showAllProductsHandler}>
          See more
        </Button>
      )}
    </section>
  );
};

export default Products;
