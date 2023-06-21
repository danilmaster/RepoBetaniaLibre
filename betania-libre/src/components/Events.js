import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    { title: 'Evento 1', date: '1 de enero de 2022' },
    { title: 'Evento 2', date: '15 de febrero de 2022' },
    { title: 'Evento 3', date: '10 de marzo de 2022' },
    // Agrega más objetos de eventos según necesites
  ];

  return (
    <div className="events">
      <h2>Próximos Eventos</h2>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
