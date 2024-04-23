import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleSaveCart = () => {
    dispatch(cartActions.saveCartRequest(cartItems));
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems?.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.quantity * item.price,
                price: item.price
              }}
            />
          );
        })}
      </ul>
      <button className={classes.button} onClick={handleSaveCart}>
        <span>Save My Cart</span>
      </button>
    </Card>
  );
};

export default Cart;
