import { useNavigate } from "react-router-dom";

const Item = ({ title, price, thumbnail, id }) => {
  const navigate = useNavigate();

  return (
    <article
      className="item-list__item"
      onClick={() => navigate(`/detail/${id}`)}
    >
      <img src={thumbnail} alt="" />
      <div className="item-list__details">
        <h2>{title}</h2>
        <p>$ {price}</p>
      </div>
    </article>
  );
};

export default Item;
