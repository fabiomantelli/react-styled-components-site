import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { 
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour
} from './Data';

const Home = () => {
  return (
      <>
        <InfoSection {...homeObjectOne} />
        <InfoSection {...homeObjectTwo} />
        <InfoSection {...homeObjectThree} />
        <Pricing />
        <InfoSection {...homeObjectFour} />
      </>
  );
};

export default Home;
