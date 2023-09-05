import React from 'react';
import banner from '../assets/banner.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <figure className='banner'>
      <img className='banner-img' src={banner} alt="bannière de l'accueil" />
      <figcaption className='banner-caption'>Chez vous, partout et ailleurs</figcaption>
    </figure>
  );
}

export default Banner;