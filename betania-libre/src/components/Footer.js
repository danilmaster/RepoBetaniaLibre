// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Sobre Nosotros</h4>
          <p>
            Betania Libre es una comunidad dedicada a proporcionar un ambiente de amor y paz para todos sus miembros.
          </p>
        </div>
        <div className="footer-column">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sermones">Sermones</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
            {/* Otros enlaces */}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>
            Dirección: Calle Principal, Ciudad
            <br />
            Teléfono: +123456789
            <br />
            Email: info@betanialibre.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Betania Libre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
