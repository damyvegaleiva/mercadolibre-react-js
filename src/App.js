import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './Components/HeaderContainer/HeaderContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HeaderContainer />} />
            <Route path='/search/:searchId' element={<ItemListContainer greeting='Filtrado de productos' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div >
  );
}

export default App;