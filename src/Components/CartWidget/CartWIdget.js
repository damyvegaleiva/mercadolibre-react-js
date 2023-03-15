import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartWidget = () => {

  const { items } = useContext(CartContext);


  return (
    <div>
      <span>🛒</span>
      <span>{items.length}</span>
    </div>
  );
}

export default CartWidget;