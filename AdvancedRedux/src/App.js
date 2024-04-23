import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { cartActions } from "./store/cart-slice";

function App() {
  const cartIsVisible = useSelector(state => {
    return state.ui.cartIsVisible;
  });

  const notification = useSelector(state => {
    return state.ui.showNotification;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.getMeals());
    dispatch(cartActions.getCartRequest());
  }, [dispatch]);

  return (
    <>
      {notification && <Notification />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
