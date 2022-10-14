import { configureStore } from "@reduxjs/toolkit";
import { expenseReducer } from "./slices/expense-slice";
import { userReducer } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    expenseSlice: expenseReducer,
  },
});
