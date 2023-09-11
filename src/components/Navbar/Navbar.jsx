import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='nav'>
      <img src={logo} alt="logo kasa" />
      <ul className='nav-ul'>
        <li>
          <Link className='nav-li' to={'/'}>Accueil</Link>
        </li>
        <li>
          <Link className='nav-li' to={'/about'}>A Propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;