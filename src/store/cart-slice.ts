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
  cart: [],
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
          quantity: newItem.quantity,
          image: newItem.image,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },
    calcTotalAmount(state) {
      state.totalAmount = parseFloat(
        state.cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)
      );
    },
    increaseProductQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseProductQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
  },
});

export const {
  addItem,
  calcTotalAmount,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice;
