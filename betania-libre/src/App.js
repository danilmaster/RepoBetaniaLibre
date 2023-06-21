import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sermons from './components/Sermons';
import Enseñanzas from './components/Enseñanzas';
import Eventos from './components/Eventos';
import Noticias from './components/Noticias';
import Agenda from './components/Agenda';
import DiezmosOfrendas from './components/DiezmosOfrendas';
import Testimonios from './components/Testimonios';
import Ministerios from './components/Ministerios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';


// Resto del código del componente App...


const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermones" element={<Sermons />} />
        <Route path="/enseñanzas" element={<Enseñanzas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/diezmos-y-ofrendas" element={<DiezmosOfrendas />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      {showScrollButton && (
        <div className="ScrollTopButton" onClick={scrollToTop}>
          ↑
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
