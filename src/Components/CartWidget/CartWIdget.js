import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const navigate = useNavigate()
  const { cart } = useContext(CartContext);


  return (
    <div className="cart-widget" onClick={() => navigate('/cart')}>
      <span>🛒</span>
      <span>{cart.length}</span>
    </div>
  );
}

export default CartWidget;