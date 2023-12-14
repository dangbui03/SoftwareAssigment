import React from 'react';
//import PrinterInfo from './Data';
import Footer from '../Footer.js/Footer';
import { homeObjTwo } from './Data';
import PrinterInfo from '../../PrinterInfo';

function Products() {
  return (
    <>
      <PrinterInfo {...homeObjTwo} /> 
    </>
  );
}

export default Products;
