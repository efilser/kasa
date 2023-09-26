import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to={'/'}>
        <img src={logo} alt="logo kasa" />
      </Link>
      <ul>
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
