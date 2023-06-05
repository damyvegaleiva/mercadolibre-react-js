const ItemOptions = ({ stock, setQuantity, quantity }) => {
  const addQuantity = () => {
    if (quantity < stock) setQuantity((prev) => prev + 1);
  };

  const substractQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="item-options__container">
      <div className="item-options__options">
        <button onClick={substractQuantity}>-</button>
        <p className="item-options__quantity">{quantity}</p>
        <button onClick={addQuantity}>+</button>
      </div>
    </div>
  );
};

export default ItemOptions;
