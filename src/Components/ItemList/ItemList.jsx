import Item from "../Item/Item";

const ItemList = ({ products, isLoading }) => {
  if (isLoading) {
    return <h1>...LOADING</h1>;
  }

  return (
    <div className="item-list__container">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
