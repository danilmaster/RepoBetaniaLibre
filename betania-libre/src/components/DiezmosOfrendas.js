import './DiezmosOfrendas.css';
import imagenDiezmosOfrendas from '../images/imagen-diezmos-ofrendas.jpg';

// Resto del código del componente


const DiezmosOfrendas = () => {
  return (
    <div className="diezmos-ofrendas-container">
      <h2 className="section-title">Diezmos y Ofrendas</h2>
      <p className="section-description">¡Bienvenido a nuestra página de Diezmos y Ofrendas!</p>
      <div className="section-content">
        <div className="image-container">
          <img src={imagenDiezmosOfrendas} alt="Imagen de diezmos y ofrendas" />
        </div>
        <div className="information-container">
          <p className="information-text">Aquí encontrarás información sobre cómo contribuir a nuestra comunidad:</p>
          <ul className="bullet-list">
            <li>Información sobre el propósito y la importancia de los diezmos y ofrendas</li>
            <li>Instrucciones para realizar contribuciones y donaciones</li>
            <li>Recursos para aprender más sobre la mayordomía cristiana</li>
          </ul>
          <a href="/contribuir" className="button">¡Contribuye ahora!</a>
        </div>
      </div>
    </div>
  );
};

export default DiezmosOfrendas;
