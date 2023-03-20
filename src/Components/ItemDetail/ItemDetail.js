import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ title, thumbnail, price }) => {
  return (
    <article className="item-detail-container__item">
      <h2>{title}</h2>
      <img src={thumbnail} alt={title} width={250} />
      <h3>Precio: ${price}</h3>
      <ItemCount />
      {/* {isInCart(id) > 0 ? <AfterAddToCartOptions />
        : <ItemCount />} */}
    </article>
  );
}

export default ItemDetail;