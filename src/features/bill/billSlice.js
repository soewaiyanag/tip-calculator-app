import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = billSlice.actions;

export default billSlice.reducer;
