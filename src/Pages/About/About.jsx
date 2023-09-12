import React from 'react';
import './About.css';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Collapse from '../../components/Collapse/Collapse';

function About() {
  return (
    <div className='about'>
      <AboutBanner />
      <Collapse />
    </div>
  );
}

export default About;
