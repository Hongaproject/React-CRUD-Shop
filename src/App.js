import React, { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductDetail from './router/ProductDetail';
import data from './data';
import Home from './router/Home';
import About from './router/About';
import Grid from './component/Grid';
import Main from './component/Main';


function App() {

  const [product, setProduct] = useState(data);

  return (
    <>
      <Header />
        {/* <div>
          {
            product.map((list, index) => {
              return(
                <Grid product={product[index]} key={index}/>
              );
            })
          }
        </div> */}
        <Routes>
          <Route path='/' element={<Main product={product}/>}/>
        </Routes>
        {/* <Routes>
          <Route path='/' element={<Home product={product}/>} />
          <Route path='/pdetail/:id' element={<ProductDetail product={product}/>} />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버정보</div>} />
            <Route path="location" element={<div>위치정보</div>} />
          </Route>
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
        </Routes> */}
      <Footer />
    </>
  );
}

export default App;
