import ItemDetailPics from "../ItemDetailPics/ItemDetailPics";
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo";

const ItemDetail = ({ isLoading, ...prod }) => {
  if (isLoading) {
    return <h1>...LOADING ITEM DETAILS</h1>;
  }

  return (
    <div className="item-detail__container">
      <ItemDetailPics {...prod} />
      <ItemDetailInfo {...prod} />
    </div>
  );
};

export default ItemDetail;
