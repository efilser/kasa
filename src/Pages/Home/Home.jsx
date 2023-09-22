import React, { useEffect } from 'react';
import './Home.css';
import Banner from '../../components/Banner/Banner';
import Thumbs from '../../components/Thumbs/Thumbs';

function Home() {
  useEffect(() => {
    document.title = 'Kasa - Accueil'; // Update the page title when the component mounts
    return () => {
      document.title = 'Kasa'; // Reset the page title when the component unmounts
    };
  }, []);

  return (
    <div className='home'>
      <Banner />
      <Thumbs />
    </div>
  );
}

export default Home;
