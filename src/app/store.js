import { configureStore, combineReducers } from "@reduxjs/toolkit";
import billReducer from "features/bill/billSlice";

const rootReducer = combineReducers({ bill: billReducer });

export const store = configureStore({
  reducer: rootReducer,
});
