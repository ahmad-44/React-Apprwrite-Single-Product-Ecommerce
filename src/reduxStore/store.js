import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import quantityReducer from "./quantityCounterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    quantity: quantityReducer,
  },
});

export default store;
