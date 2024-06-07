import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  message:null
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state,action)=>{
      state.message = "product added to cart"
     
      state.cart.push(action.payload);
    },
    removeCart: (state,action)=>{
      state.message = "product removed from cart"
      state.cart =  state.cart.filter((product)=>product._id != action.payload)
    },
    clearAllCart:(state,action)=>{
      state.cart = [];
    },
    clearNotifications:(state,action)=>{
      state.message = null
    } 
  },
});

export const { addCart,removeCart,clearAllCart,clearNotifications } = cartSlice.actions;

export default cartSlice.reducer;
