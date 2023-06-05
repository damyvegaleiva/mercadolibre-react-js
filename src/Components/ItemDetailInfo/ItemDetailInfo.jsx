import ItemOptions from "../ItemOptions/ItemOptions";
import PurchaseButton from "../PurchaseButton/PurchaseButton";
import { useState } from "react";

const ItemDetailInfo = ({ title, price, available_quantity, ...prod }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item-detail__info">
      <h2>{title}</h2>
      <p>$ {price}</p>
      <p>Stock: {available_quantity}</p>

      <ItemOptions
        stock={available_quantity}
        quantity={quantity}
        setQuantity={setQuantity}
      />

      <PurchaseButton
        {...prod}
        quantity={quantity}
        title={title}
        price={price}
      />
    </div>
  );
};

export default ItemDetailInfo;
