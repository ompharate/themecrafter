import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
  message:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUserSlice: (state,action) => {
      state.message= "user login successful"
      state.isLogin = true;
      state.user = action.payload;

    },
    LogoutUserSlice: (state) => {
      state.message="user logout successful"
      state.isLogin = false;
      state.user = null;
    },
    clearUserNotifications:(state,action)=>{
      state.message = null
    }
  },
});

export const { LoginUserSlice, LogoutUserSlice ,clearUserNotifications} = userSlice.actions;

export default userSlice.reducer;
