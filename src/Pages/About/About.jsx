import React, { useEffect } from 'react';
import './About.css';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../datas/About.json';
import aboutBanner from '../../assets/about_banner.png';

function About() {
  useEffect(() => {
    document.title = 'Kasa - A propos'; // Update the page title when the component mounts
    return () => {
      document.title = 'Kasa'; // Reset the page title when the component unmounts
    };
  }, []);

  return (
    <div className='about'>
      <Banner
        bannerSrc={aboutBanner}
        altText="bannière de la page à propos"
      />
      <Collapse data={aboutData}/>
    </div>
  );
}

export default About;
