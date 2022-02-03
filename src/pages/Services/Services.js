import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { 
  homeObjectFour
} from './Data';

const Home = () => {
  return (
      <>
        <Pricing />
        <InfoSection {...homeObjectFour} />
      </>
  );
};

export default Home;
