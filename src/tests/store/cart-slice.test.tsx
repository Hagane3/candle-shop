import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import cartSlice, { Cart, CartItem } from "../../store/cart-slice";
import {
  addItem,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} from "../../store/cart-slice";

describe("cartSlice", () => {
  let store: EnhancedStore<{ cart: Cart }>;

  beforeEach(() => {
    store = configureStore({
      reducer: { cart: cartSlice.reducer },
    });
  });

  it("should add item to cart", () => {
    const newItem: CartItem = {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
      image: "path/to/image",
      subscription: "monthly",
    };

    store.dispatch(addItem(newItem));

    const state = store.getState();
    expect(state.cart.cart).toHaveLength(1);
    expect(state.cart.cart[0]).toEqual(newItem);
  });

  it("should increase product quantity", () => {
    const newItem: CartItem = {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
      image: "path/to/image",
      subscription: "monthly",
    };

    store.dispatch(addItem(newItem));
    store.dispatch(increaseProductQuantity(newItem.id));

    const state = store.getState();
    expect(state.cart.cart[0].quantity).toEqual(2);
  });

  it("should decrease product quantity", () => {
    const newItem: CartItem = {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 2,
      image: "path/to/image",
      subscription: "monthly",
    };

    store.dispatch(addItem(newItem));
    store.dispatch(decreaseProductQuantity(newItem.id));

    const state = store.getState();
    expect(state.cart.cart[0].quantity).toEqual(1);
  });

  it("should remove item from cart", () => {
    const newItem: CartItem = {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
      image: "path/to/image",
      subscription: "monthly",
    };

    store.dispatch(addItem(newItem));
    store.dispatch(removeFromCart(newItem.id));

    const state = store.getState();
    expect(state.cart.cart).toHaveLength(0);
  });
});
