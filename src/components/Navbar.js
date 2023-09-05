import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
      <img src={logo} alt="logo" />
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link className='nav-li' to={'/'}>Accueil</Link>
        </li>
        <li className='nav-li'>
          <Link className='nav-li' to={'/about'}>A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;