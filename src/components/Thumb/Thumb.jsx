import React from 'react';
import './Thumb.css';
import accommodationsData from '../../datas/Accommodations.json';
import { Link } from 'react-router-dom';

function Thumb() {
  return (
    <section className='accommodations'>
      {accommodationsData.map((accommodation) => (
        <div className='thumb' key={accommodation.id}>
          <Link to={`/accommodations/${accommodation.id}`} className='thumb-link'>
          <img className='thumb-img' src={accommodation.cover} alt={accommodation.description}></img>
          <p className='thumb-caption'>{accommodation.title}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Thumb;