import React from 'react';
import banner from '../../assets/banner.png';
import './Banner.css';

function Banner() {
  return (
    <header className='banner'>
      <img className='banner-img' src={banner} alt="bannière de l'accueil" />
      <p className='banner-caption'>Chez vous, partout et ailleurs</p>
    </header>
  );
}

export default Banner;