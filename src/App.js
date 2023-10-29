import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import data from './data';
import Detail from './Test/Detail';
import Mainx from './Test/Mainx';
import Basket from './Test/Basket';
import styled from 'styled-components';

const Bket = styled.div`
  position : fixed;
  width: 300px;
  height: 100%;
  margin-top: 50px;
`

const BketBtn = styled.div`
  display: flex;
`

const A = styled.div`
  margin-right: 10px;
  margin-top: 5px;
`
const BMain= styled.div`
  display: flex;
  p{
    margin-right: 10px;
  }
`

const B= styled.div`
  line-height: 50px;
`


function App() {
  const [product, setProduct] = useState(data);

  let getlocal = JSON.parse(localStorage.getItem("title")); // 재할당을 하기 위해 let을 사용함. title키를 가진 값을 할당 시켜줌. ""안에 아무거나 넣어도 가능 name이나 data도 가능

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    getlocal === null ? localStorage.setItem("title", JSON.stringify([])) : null
    // 삼항연산자로 local부분이 비어있다면 localStorage.setItem으로 빈 배열을 넣어주고 local부분이 비어있지 않다면 아무 행동을 하지 않는다.
  }, []);



  return (
    <>
      <Header />
        <Bket>
          <BMain>
            <p>최근 본 상품</p>
            <B>
              <button onClick={()=> localStorage.removeItem('title')}>X</button> 
            </B>
          </BMain>
          {/* local부분이 비어있지 않다면 map함수를 이용해서 보여준다. */}
            {getlocal !== null
            ? getlocal.map((a, i) => {
                return (
                  <BketBtn>
                    <A>
                      <span>{getlocal[i]}</span>
                    </A>
                  </BketBtn>
                );
              })
            : null}
        </Bket>
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
