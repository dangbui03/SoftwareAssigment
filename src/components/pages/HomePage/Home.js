import React from 'react';
import HeroSection from '../../HeroSection';
import NewStyle from '../../NewStyle';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <NewStyle {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
