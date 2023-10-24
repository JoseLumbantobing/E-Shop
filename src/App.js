import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login_Sign from './Pages/Login_Sign';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Category category="men" />} />
          <Route path='/women' element={<Category category="women" />} />
          <Route path='/kids' element={<Category category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login_Sign />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
