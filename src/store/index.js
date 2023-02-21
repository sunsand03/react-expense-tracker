import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// 3 Set a configuration and whitelist for slices reducer you want to persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["EXPENSE"],
};

// 1 Combine the reducers into a single reducer
const allReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

// 4 Persist the combined reducers using the configurations provided
const persistedReducers = persistReducer(persistConfig, allReducers);

// 2 Create the store with the persisted reducers
const store = configureStore({
  reducer: persistedReducers,
});

// 5 Persisted store to send to the PersistGate provider
let persistor = persistStore(store);

// 6 Export the persisted store as well
export { store, persistor };
