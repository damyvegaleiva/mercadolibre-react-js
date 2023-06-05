import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((prod) => prod.id === id);

  const addToCart = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
      return;
    }

    console.log("objecto ya existe");
  };

  return { cart, isInCart, addToCart };
};
