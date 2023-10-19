import React, { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './router/ProductDetail';
import data from './data.js';
import Product from './router/Product';


function App() {

  const [product, setProduct] = useState(data);

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Product product={product}/>} />
          <Route path='/pdetail/:id' element={<ProductDetail />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
