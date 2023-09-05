import React from 'react';
import logo from '../assets/logo_footer.svg';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <img className='footer-logo' src={logo} alt="logo pied de page" />
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;