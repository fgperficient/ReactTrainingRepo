import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import { watcherSaga } from "../saga/rootSaga";

const sageMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sageMiddleware)
});

sageMiddleware.run(watcherSaga);

export default store;
