import React from 'react';
import banner from '../../assets/banner.png';
import './Banner.css';

function Banner() {
  return (
    <header>
      <img src={banner} alt="bannière de l'accueil" />
      <p>Chez vous, partout et ailleurs</p>
    </header>
  );
}

export default Banner;
