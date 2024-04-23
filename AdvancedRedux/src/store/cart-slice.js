import { createSlice } from "@reduxjs/toolkit";
import getMeals from "../saga/requests/getMeals";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    products: [],
    isLoading: false,
    hasError: false,
    message: ""
  },
  reducers: {
    getMeals: state => {
      state.isLoading = true;
      state.message = "Loading...";
    },
    setMeals: (state, action) => {
      state.products = action.payload;
      state.message = "Meals Fetched Correctly";
      state.isLoading = false;
    },
    getMealsError: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.hasError = true;
    },
    saveCartRequest: state => {
      state.isLoading = true;
      state.message = "Saving...";
    },
    saveCartResponse: state => {
      state.isLoading = false;
      state.message = "Saved";
    },
    saveCartError: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.hasError = true;
    },
    getCartRequest: state => {
      state.isLoading = true;
      state.message = "Loading...";
    },
    getCartResponse: (state, action) => {
      state.cart = action.payload.order ?? [];
      state.isLoading = false;
      state.message = "Cart Fetched Correctly";
    },
    getCartError: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.hasError = true;
    },
    addToCart: (state, action) => {
      const initialCart = state.cart;
      const index = initialCart.findIndex(i => i.id === action.payload.id);
      if (index === -1) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        const item = state.cart[index];
        item.quantity = item.quantity + 1;
        state.cart[index] = item;
      }
    },
    removeFromCart: (state, action) => {
      const initialCart = state.cart;
      const index = initialCart.findIndex(i => i.id === action.payload.id);
      const item = state.cart[index];
      item.quantity = item.quantity - 1;
      if (item.quantity === 0) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index] = item;
      }
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
