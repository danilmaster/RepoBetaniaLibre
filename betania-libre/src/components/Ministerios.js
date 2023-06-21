import React from 'react';
import ministryImage1 from '../assets/ministry1.jpg';
import ministryImage2 from '../assets/ministry2.jpg';
import ministryImage3 from '../assets/ministry3.jpg';
import './Ministerios.css';

const Ministerios = () => {
  return (
    <div className="ministerios-container">
      <div className="ministerio-card">
        <h3>Ministerio de Adoración</h3>
        <img src={ministryImage1} alt="Ministerio de Adoración" className="ministerio-image" />
        <p>Aquí puedes agregar una descripción o información relevante sobre el Ministerio de Adoración.</p>
      </div>
      <div className="ministerio-card">
        <h3>Ministerio de Edificación Familiar</h3>
        <img src={ministryImage2} alt="Ministerio de Edificación Familiar" className="ministerio-image" />
        <p>Aquí puedes agregar una descripción o información relevante sobre el Ministerio de Edificación Familiar.</p>
      </div>
      <div className="ministerio-card">
        <h3>Ministerio de Protocolo</h3>
        <img src={ministryImage3} alt="Ministerio de Protocolo" className="ministerio-image" />
        <p>Aquí puedes agregar una descripción o información relevante sobre el Ministerio de Protocolo.</p>
      </div>
      {/* Agrega más secciones de ministerios según sea necesario */}
    </div>
  );
};

export default Ministerios;



