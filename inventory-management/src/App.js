import './App.css';
// import { useContext } from 'react';
// import { ProductContext } from './context/ProductContext';
import { Route, Routes } from 'react-router-dom';
import {Dashboard} from "./pages/dashboard/Dashboard"
import {Departments} from "./pages/departments/Departments"
import {Products} from "./pages/products/Products"
import {ProductDetail} from "./pages/productDetail/ProductDetail"
import { Navbar } from './components/Navbar';
import { AddProduct } from './pages/newproduct/AddProduct';

function App() {
  
  return (
    <div className="App">
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetail/:productId' element={<ProductDetail />} />
          <Route path='/addproduct' element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
