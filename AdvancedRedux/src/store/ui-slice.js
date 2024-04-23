import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, showNotification: false },
  reducers: {
    toogle: state => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action) => {
      state.showNotification = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;
