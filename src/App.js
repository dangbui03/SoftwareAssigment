import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Manage from './components/pages/Manage/Manage'
import Products from './components/pages/Products/Products';
import Addprinter from './components/pages/Addprinter/Addprinter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/pages/SignUp/Data';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<Login />} />
        <Route path='/m_printer'element={<Manage />}/>
        <Route path='/addprinter'element={<Addprinter />}/>
      </Routes> 
    </Router>
  );
}
export default App;
