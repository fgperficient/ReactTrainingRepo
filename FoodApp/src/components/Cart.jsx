import Modal from "./UI/Modal";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const cartTotal = ctx.items.reduce((totalValue, item) => {
    return totalValue + item.price * item.quantity;
  }, 0);

  const handleCloseCart = () => {
    userCtx.hideCart();
  };

  const handleOpenCheckout = () => {
    userCtx.showCheckout();
  };

  return (
    <Modal
      className="cart"
      open={userCtx.progress === "cart"}
      onClose={userCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {ctx.items.map(item => (
          <CartItem
            key={item.id}
            meal={item}
            onIncrease={() => ctx.addItem(item)}
            onDeacrease={() => ctx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="cart-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {ctx.items.length > 0 && (
          <Button onClick={handleOpenCheckout}>Go to CheckOut</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
