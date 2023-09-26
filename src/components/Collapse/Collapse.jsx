import React, { useState } from 'react';
import './Collapse.css';
import arrow from '../../assets/up_arrow.svg';

function Collapse({ data }) {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleContent = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <div className='wrapper'>
      <div className='collapse'>
        {data.map((item, index) => (
          <div className='collapse-item' key={index}>
            <div className='collapse-item-title' onClick={() => toggleContent(index)}>
              <h2>{item.title}</h2>
              <img src={arrow} alt="arrow for the collapse element" className={expandedIndexes.includes(index) ? 'rotate' : ''} />
            </div>
            {expandedIndexes.includes(index) && (
              <div className='collapse-item-content'>{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collapse;
