import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

const Header = () => {
  const ctx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);

  const totalCartItems = ctx.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  const handleShowCart = () => {
    userCtx.showCart();
  };
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="app logo" />
        <h1>ReactFood</h1>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
