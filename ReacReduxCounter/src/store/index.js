import { createStore } from "redux";
const initialState = { counter: 0, showCounter: true };

/*const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action?.payload?.amount ?? 1;
    },
    decrement(state) {
      state.counter--;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});*/

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + (action?.payload?.amount ?? 1)
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }

  if (action.type === "toogle") {
    return {
      ...state,
      showCounter: !state.showCounter
    };
  }
};

const store = createStore(counterReducer);

export default store;
