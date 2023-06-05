import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";

const PurchaseButton = ({ title, price, thumbnail, id, quantity }) => {
  const { addToCart } = useContext(CartContext);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleStyle = () => {
    setBackgroundColor("#0154d1");

    setTimeout(() => {
      setBackgroundColor("#3483fa");
    }, 100);
  };

  return (
    <div className={`item-detail__purchase`}>
      <button
        style={{ background: backgroundColor }}
        onClick={() => {
          addToCart({ title, price, thumbnail, id, quantity });
          handleStyle();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default PurchaseButton;
