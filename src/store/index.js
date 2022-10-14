import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./slices/expense-slice";

export const store = configureStore({
  reducer: {
    expenseSlice: expenseReducer,
  },
});
