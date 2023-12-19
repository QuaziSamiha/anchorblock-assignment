import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { usersSlice } from "../features/api/usersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  [usersSlice.reducerPath]: usersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersSlice.middleware),
});
