import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (productToAdd) => {
    if (!cart.some(prod => prod.id === productToAdd.id)) {
      setCart(prev => {
        return [...prev, productToAdd]
      }
      )
    }
  }


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider >
  )
}