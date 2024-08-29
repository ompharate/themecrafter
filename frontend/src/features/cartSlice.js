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
      console.log(isExist);
      if (isExist) {
        state.message = "product already exists in the cart";
        return;
      }
      state.cart.push(action.payload);
      state.message = "product added in the cart";
    },
    removeCart: (state, action) => {
      state.message = "product removed from cart";
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
