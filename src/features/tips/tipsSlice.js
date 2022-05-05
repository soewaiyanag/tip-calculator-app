import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const tipsSlice = createSlice({
  name: "tips",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = tipsSlice.actions;

export default tipsSlice.reducer;
