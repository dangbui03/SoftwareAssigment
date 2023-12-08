import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree} from './Data';
import Footer from '../Footer.js/Footer';
function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Footer></Footer>
    </>
  );
}

export default Services;
