import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import LandingPage from "./pages/Landing";
import ProductCategory from "./pages/ProductCategory";
import Cart from "./pages/Cart";
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productcategory/:category" element={<ProductCategory />} />
           <Route path="/success" element={<Success/>} />
           <Route path="/cancel" element={<Cancel/>} />
        </Routes>
       
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


