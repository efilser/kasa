import React from 'react';
import './Thumbs.css';
import accommodationsData from '../../datas/Accommodations.json';
import { Link } from 'react-router-dom';

function Thumbs() {
  return (
    <section className='accommodations'>
      {accommodationsData.map((accommodation) => (
        <div className='thumb' key={accommodation.id}>
          <Link to={`/accommodations/${accommodation.id}`} className='thumb-link'>
          <img className='thumb-img' src={accommodation.cover} alt={accommodation.description}></img>
          <div className='thumb-gradient'>
            <p className='thumb-caption'>{accommodation.title}</p>
          </div>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Thumbs;
