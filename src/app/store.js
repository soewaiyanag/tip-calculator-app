import { configureStore, combineReducers } from "@reduxjs/toolkit";
import billReducer from "features/bill/billSlice";
import tipsReducer from "features/tipPercent/tipPercentSlice";
import numberOfPeopleReducer from "features/numberOfPeople/numberOfPeopleSlice";

const rootReducer = combineReducers({
  bill: billReducer,
  tipPercent: tipsReducer,
  numberOfPeople: numberOfPeopleReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
