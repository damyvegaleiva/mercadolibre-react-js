import { useState } from "react";

const CategoriesList = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <li onClick={handleClick} className="nav-bar__mas-categorias">
      Mas Categorias ▼
      <ul className={`nav-bar__categories-list ${isActive}`}>{children}</ul>
    </li>
  );
};

export default CategoriesList;
