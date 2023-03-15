import { Link } from "react-router-dom";

const Item = ({ title, price, thumbnail, id }) => {
    return (
        <article className="item-list-container__item">
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <hr style={{ width: '95%', borderRadius: 5 }} />
            <h3>Price: ${price}</h3>
            <Link to={`/detail/${id}`}><button>Mas detalles</button></Link>
        </article>
    );
}

export default Item;