import React from 'react';
import { InfoSection } from '../../components';
import { 
  homeObjectThree
} from './Data';

const Home = () => {
  return (
      <>
        <InfoSection {...homeObjectThree } />
      </>
  );
};

export default Home;
