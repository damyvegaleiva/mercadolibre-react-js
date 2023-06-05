import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

const CategoriesListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/categories	")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <CategoriesList>
      {categories.map((cat) => (
        <CategoriesItem key={cat.id} {...cat} />
      ))}
    </CategoriesList>
  );
};

export default CategoriesListContainer;
