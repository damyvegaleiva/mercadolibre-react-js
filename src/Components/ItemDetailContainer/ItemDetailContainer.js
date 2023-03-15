import { useFetch } from "../../asynMock";

const ItemDetailContainer = () => {
  const { data: products, error, isLoading } = useFetch()

  return (
    <div> </div>
  );
}

export default ItemDetailContainer;