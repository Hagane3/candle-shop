import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./cart-slice";

export type Order = {
  order: {
    totalAmount: number;
    products: CartItem[];
  };
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {
      totalAmount: 0,
      products: [] as CartItem[],
    },
  },
  reducers: {
    addOrder(state, action) {
      state.order = { ...action.payload };
    },
    addToOrder(state, action) {
      state.order = { ...state.order, ...action.payload };
    },
    calcTotalAmount(state, action) {
      state.order.totalAmount += action.payload;
    },
    increaseOrderProductQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.order.products.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseOrderProductQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.order.products.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
      }
    },
    calcOrderAmount(state) {
      state.order.totalAmount = parseFloat(
        state.order.products
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)
      );
    },
  },
});

export const {
  addOrder,
  addToOrder,
  calcTotalAmount,
  increaseOrderProductQuantity,
  decreaseOrderProductQuantity,
  calcOrderAmount,
} = orderSlice.actions;

export default orderSlice;
