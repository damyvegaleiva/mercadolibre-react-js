import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="nav-bar__cart-widget" onClick={() => navigate("/cart")}>
      🛒 {cart.length}
    </div>
  );
};

export default CartWidget;
