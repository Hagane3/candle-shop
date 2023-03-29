import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import ProductItem from "../ProductItem/ProductItem";

import { products } from "../../../data/products";

import classes from "./Products.module.scss";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  const showAllProductsHandler = () => {
    setVisibleProducts(products.length);
  };

  return (
    <section className={classes.root}>
      <h3>Products</h3>
      <h4>Order it for you or for your beloved ones.</h4>
      <div className={classes.products}>
        {products.slice(0, visibleProducts).map((product) => {
          return (
            <ProductItem
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
      {visibleProducts < products.length && (
        <Button width={50} showAllProducts={showAllProductsHandler}>
          See more
        </Button>
      )}
    </section>
  );
};

export default Products;
