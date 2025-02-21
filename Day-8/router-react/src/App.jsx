import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductDetails/> } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound/> } />
      </Routes>
    </div>
  );
};

export default App;
