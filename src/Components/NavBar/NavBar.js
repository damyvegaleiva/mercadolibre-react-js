import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWIdget";
import NavBarSearch from "../NavBarSearch/NavBarSearch";

const NavBar = () => {

    return (
        <nav>
            <div className="nav-bar-container">
                <Link to='/'><img src="/images/logo.png" alt="Logo mercadolibre" /></Link>
                <NavBarSearch />
                <ul className="nav-bar-container__list">
                    <li><Link to='/category/celulares'>Celulares</Link></li>
                    <li><Link to='/category/tablets'>Tablets</Link></li>
                    <li><Link to='/category/laptops'>Laptops</Link></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;