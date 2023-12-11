import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/SignUp/Data';
import PrinterInfo1 from './components/pages/PrinterInfo1/Info'
import PrinterInfo2 from './components/pages/PrinterInfo2/Info'
import PrinterInfo3 from './components/pages/PrinterInfo3/Info'
import PrinterInfo4 from './components/pages/PrinterInfo4/Info'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<Login />} />
        <Route path='/printer-info1' element={<PrinterInfo1/>} />
        <Route path='/printer-info2' element={<PrinterInfo2/>} />
        <Route path='/printer-info3' element={<PrinterInfo3/>} />
        <Route path='/printer-info4' element={<PrinterInfo4/>} />
      </Routes> 
    </Router>
  );
}
export default App;
