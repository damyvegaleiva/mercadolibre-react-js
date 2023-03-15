import { Link } from "react-router-dom";

const CategoriesContainer = () => {
  return (
    <div className="categories-container">
      <Link to="/category/gaming" ><img src="/images/gaming.jfif" alt="categoria gaming" /></Link>
      <Link to="/category/autos"><img src="/images/cars.jpg" alt="categoria autos" /></Link>
    </div>
  );
}

export default CategoriesContainer;

