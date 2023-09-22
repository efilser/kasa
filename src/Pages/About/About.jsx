import React, { useEffect } from 'react';
import './About.css';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../datas/About.json';

function About() {
  useEffect(() => {
    document.title = 'Kasa - A propos'; // Update the page title when the component mounts
    return () => {
      document.title = 'Kasa'; // Reset the page title when the component unmounts
    };
  }, []);

  return (
    <div className='about'>
      <AboutBanner />
      <Collapse data={aboutData}/>
    </div>
  );
}

export default About;
