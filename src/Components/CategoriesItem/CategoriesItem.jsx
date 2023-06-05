import { Link } from "react-router-dom";

const CategoriesItem = ({ name, id }) => {
  return (
    <li>
      <Link to={`/category/${id}`}>{name}</Link>
    </li>
  );
};

export default CategoriesItem;
