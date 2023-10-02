import React from 'react';
import './Banner.css';

function Banner({ bannerSrc, altText, text }) {
  return (
    <header>
      <img src={bannerSrc} alt={altText} />
      {text && <p>{text}</p>}
    </header>
  );
}

export default Banner;
