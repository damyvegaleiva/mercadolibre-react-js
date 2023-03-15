import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProdiver } from './Context/CartContext';
import CategoriesContainer from './Components/CategoriesContainer/CategoriesContainer';
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">

      <CartProdiver>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<> <HeaderContainer /> <ItemListContainer greeting='Bienvenidos' /> </>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Filtrado de productos" />} />
            <Route path='/categories' element={<CategoriesContainer />} />
            {/* <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route> */}
          </Routes>
        </BrowserRouter>
      </CartProdiver>
    </div>
  );
}

export default App;