import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const tipPercent = createSlice({
  name: "tipPercent",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = tipPercent.actions;

export default tipPercent.reducer;
