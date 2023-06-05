import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = () => {
  const { categoryId, searchId } = useParams();

  const { data: products, isLoading } = useFetch(
    categoryId
      ? `/sites/MLA/search?category=${categoryId}`
      : searchId
      ? `/sites/MLA/search?q=${searchId}`
      : ""
  );

  return <ItemList products={products} isLoading={isLoading} />;
};

export default ItemListContainer;
