import { useParams } from "react-router-dom";

const ItemSearch = () => {

    const { categoryId } = useParams();

    return (
        <div>
            <h2>busqueda de {categoryId}</h2>
            <ul>
                <li>talles</li>
                <li>colores</li>
            </ul>

        </div>
    );
}

export default ItemSearch;