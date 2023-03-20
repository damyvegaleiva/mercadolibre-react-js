import { useParams } from "react-router-dom";
import { useFetch } from "../../asynMock";

import ItemList from "../ItemList/ItemList";
import ItemSearch from "../ItemSearch/ItemSearch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemListContainer = ({ greeting }) => {
    const { searchId, categoryId } = useParams();
    const { data: products, error, isLoading } = useFetch(searchId ? `sites/MLA/search?q=${searchId}` : categoryId ? `/sites/MLA/search?category=${categoryId}` : '')


    if (isLoading) {
        return (<LoadingSpinner />)
    }

    if (error) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>
            <h1 className="item-list-container__title">{greeting}</h1>
            {/* {categoryId ? null : <Home />} */}
            <div style={{ display: "flex" }}>
                {(searchId || categoryId) && <ItemSearch />}
                <ItemList products={products} />
            </div>
        </div>
    );
}

export default ItemListContainer;