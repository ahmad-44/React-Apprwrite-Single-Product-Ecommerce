import { configureStore } from "@reduxjs/toolkit";
import quantitySlice from "./quantitySlice";

const store = configureStore({
  reducer: {
    quantity: quantitySlice,
  },
});

export default store;
