
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Cart from './components/Cart'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/product/:productId" element={<ItemDetailsContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
