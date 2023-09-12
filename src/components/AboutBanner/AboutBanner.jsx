import React from 'react';
import aboutBanner from '../../assets/about_banner.png';
import './AboutBanner.css';

function AboutBanner() {
  return (
    <header>
      <img src={aboutBanner} alt="bannière de la page à propos" />
    </header>
  );
}

export default AboutBanner;