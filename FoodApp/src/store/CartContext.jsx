import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      i => i.id === action.payload.item.id
    );
    const stateItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1
      };
      stateItems[existingCartItemIndex] = updatedItem;
    } else {
      stateItems.push({ ...action.payload.item, quantity: 1 });
    }
    return {
      ...state,
      items: stateItems
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      i => i.id === action.payload.id
    );
    const stateItems = [...state.items];
    const removedItem = { ...state.items[existingCartItemIndex] };
    if (removedItem.quantity === 1) {
      stateItems.splice(existingCartItemIndex, 1);
    } else {
      removedItem.quantity = removedItem.quantity - 1;
      stateItems[existingCartItemIndex] = removedItem;
    }
    return {
      ...state,
      items: stateItems
    };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = item => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: item
      }
    });
  };

  const removeItem = id => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: id
      }
    });
  };
  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
