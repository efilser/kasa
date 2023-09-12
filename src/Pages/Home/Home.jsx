import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Thumb from '../../components/Thumb/Thumb';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Thumb />
    </div>
  );
}

export default Home;