import React from "react";
import Button from "../../../components/UI/Button/Button";
import ProductItem from "../ProductItem/ProductItem";

import { products } from "../../../data/products";

import classes from "./Products.module.scss";

const Products = () => {
  return (
    <section className={classes.root}>
      <h3>Products</h3>
      <h4>Order it for you or for your beloved ones.</h4>
      <div className={classes.products}>
        {products.map((product) => {
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
      <Button width={50}>See more</Button>
    </section>
  );
};

export default Products;
