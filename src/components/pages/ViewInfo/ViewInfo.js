import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne} from './Data';

function ViewInfo() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default ViewInfo;
