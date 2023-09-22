import React from 'react';
import './About.css';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../datas/About.json';

function About() {
  return (
    <div className='about'>
      <AboutBanner />
      <Collapse data={aboutData}/>
    </div>
  );
}

export default About;
