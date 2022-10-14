import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Codiku",
};

const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {},
});

const userReducer = userSlice.reducer;

export { userReducer };
