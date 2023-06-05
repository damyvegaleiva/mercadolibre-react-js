import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      {cart.map((prod) => (
        <CartItem key={prod.id} {...prod} />
      ))}
    </table>
  );
};

export default CartContainer;
