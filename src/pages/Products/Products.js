import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { 
  homeObjectTwo,
  homeObjectThree,
  homeObjectFour
} from './Data';

const Home = () => {
  return (
      <>
        <InfoSection {...homeObjectTwo} />
        <InfoSection {...homeObjectThree} />
        <Pricing />
        <InfoSection {...homeObjectFour} />
      </>
  );
};

export default Home;
