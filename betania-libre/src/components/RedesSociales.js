import React from 'react';
import './RedesSociales.css';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const RedesSociales = () => {
  return (
    <div className="redes-sociales">
      <a href="https://www.facebook.com/iglesiabetanialibre" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} className="redes-icon" />
      </a>
      <a href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} className="redes-icon" />
      </a>
      <a href="https://www.youtube.com/tu_cuenta_de_youtube" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} className="redes-icon" />
      </a>
      <a href="https://www.tiktok.com/tu_cuenta_de_tiktok" target="_blank" rel="noopener noreferrer">
        <FaTiktok size={24} className="redes-icon" />
      </a>
      <a href="https://wa.me/tu_numero_de_telefono" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} className="redes-icon" />
      </a>
    </div>
  );
};

export default RedesSociales;
