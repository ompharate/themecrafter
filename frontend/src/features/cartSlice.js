import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  message: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
     
      const isExist = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (isExist) {
        state.message = "Product already exists in the cart";
        return;
      }
      state.cart.push(action.payload);
      state.message = "Product added to the cart";
    },
    removeCart: (state, action) => {
      state.message = "Product removed from cart";
      state.cart = state.cart.filter((product) => product.id != action.payload);
    },
    clearAllCart: (state, action) => {
      state.cart = [];
    },
    clearNotifications: (state, action) => {
      state.message = null;
    },
  },
});

export const { addCart, removeCart, clearAllCart, clearNotifications } =
  cartSlice.actions;

export default cartSlice.reducer;
