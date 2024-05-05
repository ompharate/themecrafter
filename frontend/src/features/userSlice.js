import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUserSlice: (state,action) => {
      state.isLogin = true;
      state.user = action.payload;

    },
    LogoutUserSlice: (state) => {
      state.isLogin = false;
    },
  },
});

export const { LoginUserSlice, LogoutUserSlice } = userSlice.actions;

export default userSlice.reducer;
