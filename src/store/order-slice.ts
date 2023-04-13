import { createSlice } from "@reduxjs/toolkit";

export type Order = {
  order: {};
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {
      totalAmount: 0,
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
  },
});

export const { addOrder, addToOrder, calcTotalAmount } = orderSlice.actions;

export default orderSlice;
