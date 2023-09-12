import React from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Thumbs from '../../components/Thumbs/Thumbs';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <Thumbs />
    </div>
  );
}

export default Home;
