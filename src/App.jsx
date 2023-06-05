import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/search/:searchId" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
