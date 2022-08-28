import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<h1>404 - Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
