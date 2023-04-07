import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";
import orderSlice from "./order-slice";

import { Products } from "./products-slice";
import { Cart } from "./cart-slice";
import { Order } from "./order-slice";

export type RootState = {
  products: Products;
  cart: Cart;
  order: Order;
};

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
