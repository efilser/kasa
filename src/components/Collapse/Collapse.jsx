import React from 'react';
import './Collapse.css';

const Data = [
  {
    Title: "Fiablité",
    Content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },

  {
    Title: "Respect",
    Content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },

  {
    Title: "Service",
    Content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },

  {
    Title: "Sécurité",
    Content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
]

function Collapse() {
  return (
    <div className='wrapper'>
      <div className='collapse'>
        {Data.map((item) => (
          <div className='collapse-item'>
            <h2 className='collapse-item-title'>{item.Title}</h2>
            <p className='collapse-item-content'>{item.Content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collapse;
