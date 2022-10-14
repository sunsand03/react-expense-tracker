import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseList: [
    { name: "Apple", price: 3.99 },
    { name: "Banana", price: 2.99 },
  ],
};

const expenseSlice = createSlice({
  name: "EXPENSE",
  initialState,
  reducers: {},
});

const expenseReducer = expenseSlice.reducer;

export { expenseReducer };
