import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const { data: product, isLoading } = useFetch(`/items?ids=${itemId}`);

  return <ItemDetail {...product} isLoading={isLoading} />;
};

export default ItemDetailContainer;
