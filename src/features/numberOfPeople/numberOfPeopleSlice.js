import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const numberOfPeopleSlice = createSlice({
  name: "numberOfPeople",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { update } = numberOfPeopleSlice.actions;

export default numberOfPeopleSlice.reducer;
