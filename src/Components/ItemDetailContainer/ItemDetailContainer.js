import { useParams } from "react-router-dom";
import { useFetch } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { data: product, error, isLoading } = useFetch(`items?ids=${itemId}`)


  if (isLoading) {
    return (<LoadingSpinner />)
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className="item-detail-container">
      <ItemDetail  {...product} />
    </div>
  );
}

export default ItemDetailContainer;