import { configureStore } from "@reduxjs/toolkit";
import { ExpenseReducer } from "./reducers/expense-reducer";
import { UserReducer } from "./reducers/user-reducer";

export const store = configureStore({
  reducer: {
    expense: ExpenseReducer,
    user: UserReducer,
  },
});
