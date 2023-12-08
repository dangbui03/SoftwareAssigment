import React from 'react';
import HeroSection from '../../HeroSection';
import SforMPrinter from '../../SforMPrinter';
import { homeObjOne, homeObjThree} from './Data';

function Services() {
  return (
    <>
      <SforMPrinter {...homeObjOne} />           
    </>
  );
}

export default Services;
