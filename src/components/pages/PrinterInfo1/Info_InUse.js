import React from 'react';
//import PrinterInfo from './Data';
import Footer from '../Footer.js/Footer';
import { homeObjOne } from './Data';
import PrinterInfo from '../../PrinterInfo';

function Products() {
  return (
    <>
      <PrinterInfo {...homeObjOne} /> 
    </>
  );
}

export default Products;
