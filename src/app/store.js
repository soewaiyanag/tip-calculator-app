import { configureStore, combineReducers } from "@reduxjs/toolkit";
import billReducer from "features/bill/billSlice";
import tipsReducer from "features/tips/tipsSlice";

const rootReducer = combineReducers({ bill: billReducer, tips: tipsReducer });

export const store = configureStore({
  reducer: rootReducer,
});
