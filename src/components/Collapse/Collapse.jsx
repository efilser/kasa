import React, { useState } from 'react';
import './Collapse.css';
import arrow from '../../assets/up_arrow.svg';

const Data = [
  {
    title: "Fiablité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },

  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },

  {
    title: "Service",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },

  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]

function Collapse() {
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
        {Data.map((item, index) => (
          <div className='collapse-item' key={index}>
            <div className='collapse-item-title' onClick={() => toggleContent(index)}>
              <h2>{item.title}</h2>
              <img src={arrow} alt="arrow for the collapse element" className={expandedIndexes.includes(index) ? 'rotate' : ''} />
            </div>
            {expandedIndexes.includes(index) && (
              <p className='collapse-item-content'>{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collapse;
