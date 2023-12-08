import React from 'react';
import HeroSection from '../../HeroSection';
import SforMPrinter from '../../SforMPrinter';
import { homeObjOne, homeObjThree} from './Data';
import Footer from '../Footer.js/Footer';
function Services() {
  return (
    <>
      <SforMPrinter {...homeObjOne} /> 
      <Footer></Footer>          
    </>
  );
}

export default Services;
