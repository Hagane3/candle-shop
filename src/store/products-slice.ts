import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
};

type Props = {
  cart: CartItem[];
};

const initialState: Props = {
  cart: [
    {
      id: 1,
      image: "https://iili.io/HOKWRgp.webp",
      name: "Spiced Mint",
      price: 9.99,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice;
