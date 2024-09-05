import { createSlice } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";
const initialState = {
  isLoggedIn: Boolean(await authService.getCurrentUser()),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleUserStatus: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleUserStatus } = userSlice.actions;
export default userSlice.reducer;
