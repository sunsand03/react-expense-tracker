const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [{ name: 'Apple', price: 1.00 }, { name: 'Laptop', price: 1000.00 }]
    }
})