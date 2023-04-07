import { createSlice } from "@reduxjs/toolkit";

export type Order = {
  order: {};
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
  },
  reducers: {
    addOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice;
