import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";
import CategoriesListContainer from "../CategoriesListContainer/CategoriesListContainer";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-bar__image-container">
          <Link to={"/"}>
            <img src={"./images/logo.png"} alt="Mercadolibre logo" />
          </Link>
        </div>
        <SearchBar />
        <ul className="nav-bar__list">
          <li>
            <Link>Celulares</Link>
          </li>
          <li>
            <Link>Tablets</Link>
          </li>
          <CategoriesListContainer />
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
