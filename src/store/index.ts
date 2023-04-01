import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";

import { Products } from "./products-slice";

export type RootState = {
  products: Products;
};

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
