import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth-slice";
import CounterSlice from "./counter-slice";

const store = configureStore({
  reducer: { counter: CounterSlice.reducer, auth: AuthSlice.reducer }
});

export const counterActions = CounterSlice.actions;
export const authActions = AuthSlice.actions;

export default store;
