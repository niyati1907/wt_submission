import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import LaptopDetail from './component/LaptopDetail';
import AddEditLaptop from './component/Add-Edit-Laptop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/add-laptop" element={<AddEditLaptop />} />
      <Route path="/add-laptop/:id" element={<AddEditLaptop />} />
      <Route path="/laptop/:id" element={<LaptopDetail />} />
    </Route>
  </Routes>
    </BrowserRouter>  
);
reportWebVitals();
