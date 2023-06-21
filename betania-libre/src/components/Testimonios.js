import React from 'react';
import './Testimonios.css';

const Testimonios = () => {
  return (
    <div className="testimonios">
      <h2>Testimonios</h2>
      <p>¡Bienvenido a nuestra página de testimonios!</p>
      <p>Aquí encontrarás testimonios de personas que han experimentado el poder transformador de Dios en sus vidas:</p>
      <ul>
        <li>Testimonio 1 - Descripción breve</li>
        <li>Testimonio 2 - Descripción breve</li>
        <li>Testimonio 3 - Descripción breve</li>
        {/* Agrega más testimonios aquí */}
      </ul>
    </div>
  );
};

export default Testimonios;
