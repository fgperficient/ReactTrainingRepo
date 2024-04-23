import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = props => {
  const cartState = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toogle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.cart.length}</span>
    </button>
  );
};

export default CartButton;
