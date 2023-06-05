import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addToCart, isInCart } = useCart();

  return (
    <CartContext.Provider value={{ cart, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
