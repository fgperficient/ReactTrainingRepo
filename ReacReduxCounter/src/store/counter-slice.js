import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
});

export default CounterSlice;
