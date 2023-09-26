import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import accommodationsData from '../../datas/Accommodations.json';
import './Accommodations.css';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';

function Accommodations() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = 'Kasa - Fiche logement'; // Update the page title when the component mounts
    return () => {
      document.title = 'Kasa'; // Reset the page title when the component unmounts
    };
  }, []);

  useEffect(() => {
    const accommodation = accommodationsData.find((item) => item.id === id);
    if (!accommodation) {
      navigate('/error'); // Redirect to Error page if accommodation doesn't exist
    }
  }, [id, navigate]);

  const accommodation = accommodationsData.find((item) => item.id === id);

  if (!accommodation) {
    return null; // Render nothing if accommodation is not found (optional)
  }

  const collapseData = [
    { title: 'Description', content: accommodation.description },
    { title: 'Équipements', content: accommodation.equipments.map((equipment) => <p key={equipment}>{equipment}</p>) },
  ];

  const solidStars = accommodation.rating;

  return (
    <section className='accommodation'>
      <div className='accommodation-gallery'>
        <Gallery slides={accommodation.pictures} alt={accommodation.description} />
      </div>
      <div className='accommodation-content'>
        <div className='accommodation-info'>
          <h1 className='accommodation-title'>{accommodation.title}</h1>
          <h2 className='accommodation-location'>{accommodation.location}</h2>
          <div className="accommodation-tags">
            {accommodation.tags.map((tag, index) => (
              <p key={index} className="accommodation-tag">{tag}</p>
            ))}
          </div>
        </div>
        <div className="accommodation-host">
          <div className="accommodation-host-rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-${index < solidStars ? 'solid' : 'regular'} fa-star`}
              ></i>
            ))}
          </div>
          <div className="accommodation-host-info">
            <p>{accommodation.host.name}</p>
            <img src={accommodation.host.picture} alt="Hôte du logement" />
          </div>
        </div>
      </div>
      <Collapse data={collapseData} />
    </section>
  );
};

export default Accommodations;
