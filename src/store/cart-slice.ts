import { createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Cart = {
  cart: CartItem[];
  totalAmount: number;
};

const initialState: Cart = {
  cart: [
    {
      id: "1",
      name: "Spiced Mint",
      price: 9.99,
      quantity: 1,
      image: "https://iili.io/HOKWRgp.webp",
    },
  ],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
      }
    },
    calcTotalAmount(state) {
      state.totalAmount = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addItem, calcTotalAmount } = cartSlice.actions;

export default cartSlice;
