import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { change } = billSlice.actions;

export default billSlice.reducer;
