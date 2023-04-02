import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";

import { Products } from "./products-slice";
import { Cart } from "./cart-slice";

export type RootState = {
  products: Products;
  cart: Cart;
};

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
