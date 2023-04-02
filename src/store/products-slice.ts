import { createSlice } from "@reduxjs/toolkit";

export type Product = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity?: number;
};

export type Products = {
  allProducts: Product[];
  isLoading: boolean;
};

const initialState: Products = {
  allProducts: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setProducts, setIsLoading } = productsSlice.actions;

export default productsSlice;
