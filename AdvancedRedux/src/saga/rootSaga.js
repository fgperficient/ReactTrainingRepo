import { cartActions } from "../store/cart-slice";
import { takeEvery } from "redux-saga/effects";
import { getMealsHandler } from "./handlers/getMealsHandler";
import { saveCartHandler } from "./handlers/saveCartHandler";
import { getCartHandler } from "./handlers/getCartHandler";

export function* watcherSaga() {
  yield takeEvery(cartActions.getMeals, getMealsHandler);
  yield takeEvery(cartActions.saveCartRequest, saveCartHandler);
  yield takeEvery(cartActions.getCartRequest, getCartHandler);
}
