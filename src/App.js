import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductDetail from './router/ProductDetail';
import data from './data';
import Home from './router/Home';
import About from './router/About';
import List from './Test/List';
import Detail from './Test/Detail';
import Mainx from './Test/Mainx';
import Basket from './Test/Basket';


function App() {
  const [product, setProduct] = useState(data);

  let getlocal = JSON.parse(localStorage.getItem("data")); // 재할당을 하기 위해 let을 사용함.

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    getlocal === null ? localStorage.setItem("data", JSON.stringify([])) : null
  }, []);

  return (
    <>
      <Header />
      <div>
        <p>최근 본 상품</p>
          {getlocal !== null
          ? getlocal.map((a, i) => {
              return (
                <div>
                <p className="get-local" style={{ marginTop: "10px" }}>{getlocal[i]}</p>
                <button onClick={()=> localStorage.removeItem('data')}>X</button> 
                <p>X를 누르시고 새로고침하면 사라집니다.</p>
                </div>
              );
            })
          : null}
      </div>
        {/* Test부분 */}
        <Routes>
          <Route path='/' element={<Mainx product={product}/>}/>
          <Route path="/detail/:id" element={<Detail product={product}/>}/>
          <Route path="/basket" element={<Basket />}/>
        </Routes>

        {/* <div>
          {
            product.map((list, index) => {
              return(
                <Grid product={product[index]} key={index}/>
              );
            })
          }
        </div> */}


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
