import React from 'react';
import logo from '../../assets/logo_footer.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
