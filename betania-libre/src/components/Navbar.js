import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logotipo.jpg';
import RedesSociales from './RedesSociales';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="titulo">Betania Libre</h1>
        </div>
        <div className="redes-sociales">
          <RedesSociales />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/" className="nav-link">INICIO</Link></li>
          <li><Link to="/enseñanzas" className="nav-link">ENSEÑANZAS</Link></li>
          <li><Link to="/eventos" className="nav-link">EVENTOS</Link></li>
          <li><Link to="/noticias" className="nav-link">NOTICIAS</Link></li>
          <li><Link to="/agenda" className="nav-link">AGENDA</Link></li>
          <li><Link to="/diezmos-y-ofrendas" className="nav-link">DIEZMOS Y OFRENDAS</Link></li>
          <li><Link to="/testimonios" className="nav-link">TESTIMONIOS</Link></li>
          <li><Link to="/ministerios" className="nav-link">MINISTERIOS</Link></li>
          <li><Link to="/contacto" className="nav-link">CONTACTO</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
