import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './router/Home';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
