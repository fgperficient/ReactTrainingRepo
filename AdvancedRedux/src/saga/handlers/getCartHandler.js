import { call, put, delay } from "redux-saga/effects";
import getCart from "../requests/getCart";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

export function* getCartHandler() {
  try {
    yield put(uiActions.showNotification(true));
    const response = yield call(getCart);
    yield put(cartActions.getCartResponse(response.data));
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  } catch (error) {
    yield put(cartActions.getCartError(error.message));
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  }
}
