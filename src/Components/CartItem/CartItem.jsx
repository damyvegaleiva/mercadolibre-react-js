const CartItem = ({ title, quantity, thumbnail, price }) => {
  return (
    <tbody>
      <tr>
        <td>
          <h1>{title}</h1>
        </td>
        <td>
          <p>{quantity}</p>
        </td>
        <td>
          <img
            src={thumbnail}
            alt={title}
            className="cart-item__image"
            style={{ width: "200px" }}
          />
        </td>
        <td>
          <p>Price: ${price}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default CartItem;
