import { createSlice } from "@reduxjs/toolkit";
// null means "checking the user's status."
// true means "user is logged in."
// false means "user is logged out."
const initialState = {
  isLoggedIn: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleUserStatus: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    // when the app starts, it is used. inside UserStatusChecker.jsx
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { toggleUserStatus, setUserLoggedIn } = userSlice.actions;
export default userSlice.reducer;
