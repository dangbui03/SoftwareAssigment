import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree} from './Data';

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
