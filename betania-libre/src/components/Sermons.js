import React from 'react';
import './Sermons.css';

// Importa las imágenes de enseñanzas
import teachingImage1 from '../images/teaching1.jpg';
import teachingImage2 from '../images/teaching2.jpg';
import teachingImage3 from '../images/teaching3.jpg';

const Sermons = () => {
  const sermons = [
    { title: 'Título de la enseñanza 1', speaker: 'Orador 1', date: 'Fecha 1', image: teachingImage1 },
    { title: 'Título de la enseñanza 2', speaker: 'Orador 2', date: 'Fecha 2', image: teachingImage2 },
    { title: 'Título de la enseñanza 3', speaker: 'Orador 3', date: 'Fecha 3', image: teachingImage3 },
    // Agrega más objetos de enseñanzas según necesites
  ];

  return (
    <div className="sermons">
      <h2>Enseñanzas Recientes</h2>
      <div className="sermon-list">
        {sermons.map((sermon, index) => (
          <div key={index} className="sermon-item">
            <div className="sermon-image">
              <img src={sermon.image} alt={`Imagen de ${sermon.title}`} />
            </div>
            <div className="sermon-info">
              <h3 className="sermon-title">{sermon.title}</h3>
              <p className="sermon-speaker">{sermon.speaker}</p>
              <p className="sermon-date">{sermon.date}</p>
            </div>
            <button className="sermon-button">Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sermons;






