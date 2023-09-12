import React from 'react';
import './Thumb.css';
import accommodationsData from '../../datas/Accommodations.json';

function Thumb() {
  return (
    <section className='accommodations'>
      {accommodationsData.map((accommodation) => (
        <div className='thumb' key={accommodation.id}>
          <img className='thumb-img' src={accommodation.cover} alt={accommodation.description}></img>
          <p className='thumb-caption'>{accommodation.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Thumb;