import React from 'react';
import './Home.css'; // Importa el archivo de estilos CSS personalizado
import Banner from './Banner';

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <div className="content">
        <h2 className="heading">Bienvenido a Betania Libre</h2>
        <p className="message">
          Ya sea que nos visites en línea o en alguno de nuestros Servicios, en Betania Libre queremos ayudarte a crecer en tu conocimiento e intimidad con Jesús y que más que una iglesia, consideres esta casa, tu nuevo hogar.
        </p>
      </div>
      {/* Agrega el componente Sermons u otros componentes según sea necesario */}
    </div>
  );
};

export default Home;
