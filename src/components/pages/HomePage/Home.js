import React from 'react';
import HeroSection from '../../HeroSection';
import NewStyle from '../../NewStyle';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Footer from '../Footer.js/Footer';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <NewStyle {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      <Footer></Footer>
    </>
  );
}

export default Home;
