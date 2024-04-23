import { call, put, delay } from "redux-saga/effects";
import saveCart from "../requests/saveCart";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

export function* saveCartHandler(action) {
  try {
    yield put(uiActions.showNotification(true));
    yield call(saveCart, action.payload);
    yield put(cartActions.saveCartResponse());
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  } catch (error) {
    yield put(cartActions.saveCartError(error.message));
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  }
}
