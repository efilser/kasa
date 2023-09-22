import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import accommodationsData from '../../datas/Accommodations.json';
import './Accommodations.css';
import Collapse from '../../components/Collapse/Collapse';
import Gallery from '../../components/Gallery/Gallery';

const Accommodations = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const accommodation = accommodationsData.find((item) => item.id === id);
    if (!accommodation) {
      navigate('/error'); // Redirect to Error page if accommodation doesn't exist
    }
  }, [id, navigate]);

  return (
    <section className='accommodation'>
      <div className='accommodation-gallery'>
        <Gallery slides={accommodationsData.find((item) => item.id === id).pictures} alt={accommodationsData.find((item) => item.id === id).description}/>
      </div>
      <h1 className='accommodation-title'>{accommodationsData.find((item) => item.id === id).title}</h1>
      <h2 className='accommodation-location'>{accommodationsData.find((item) => item.id === id).location}</h2>
      <div className="accommodation-tags">
        {accommodationsData.find((item) => item.id === id).tags.map((tag, index) => (
          <p key={index} className="accommodation-tag">{tag}</p>
        ))}
      </div>
      <div className="accommodation-host">
        <div className="accommodation-host-rating">{accommodationsData.find((item) => item.id === id).rating}</div>
        <div className="accommodation-host-info">
          <p>{accommodationsData.find((item) => item.id === id).host.name}</p>
          <img src={accommodationsData.find((item) => item.id === id).host.picture} alt="Hôte du logement" />
        </div>
      </div>
      <Collapse />
    </section>
  );
};

export default Accommodations;
