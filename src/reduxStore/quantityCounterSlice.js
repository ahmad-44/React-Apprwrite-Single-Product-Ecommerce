import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

const quantitySlice = createSlice({
  name: "quantityCounter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.quantity <= 9) {
        state.quantity = Number(state.quantity) + 1; // it is wrapped in number becuse double click on incement on an empty counter would result in '11' otherwise
      }
    },
    decrement: (state) => {
      if (state.quantity > 1) {
        state.quantity = Number(state.quantity) - 1;
      } else if (state.quantity === "") {
        state.quantity = 1;
      }
    },
    changeQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { increment, decrement, changeQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
