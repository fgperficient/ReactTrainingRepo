import { call, put, delay } from "redux-saga/effects";
import getMeals from "../requests/getMeals";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

export function* getMealsHandler() {
  try {
    yield put(uiActions.showNotification(true));
    const response = yield call(getMeals);
    yield put(cartActions.setMeals(response.data));
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  } catch (error) {
    yield put(cartActions.getMealsError(error.message));
    yield delay(2000);
    yield put(uiActions.showNotification(false));
  }
}
