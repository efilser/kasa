import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error () {
  useEffect(() => {
    document.title = 'Kasa - 404'; // Update the page title when the component mounts
    return () => {
      document.title = 'Kasa'; // Reset the page title when the component unmounts
    };
  }, []);

  return (
    <section>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/' className='error-link'>Retourner sur la page d'accueil</Link>
    </section>
  );
}

export default Error
