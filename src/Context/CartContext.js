import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProdiver({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, id) => {
    setItems(preValue => [...preValue, { name, price, id }])
  }



  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;