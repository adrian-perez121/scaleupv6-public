import React, { useEffect } from 'react';
import { agendaItems } from '../data/agenda';

const Agenda = ({ onOpenMap }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const agendaItemsToAnimate = document.querySelectorAll('.agenda-item-animate');
    agendaItemsToAnimate.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      agendaItemsToAnimate.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="agenda" className="section content-section">
      <div className="container">
        <div className="agenda-title-container">
          <h2 className="section-title agenda-headline">
            Agenda
          </h2>
        </div>
        <ul className="agenda-list">
          {agendaItems.map((item, index) => (
              <li key={index} className="agenda-item agenda-item-animate">
                <div className="agenda-time-wrapper">
                  <div className="agenda-time">{item.time}</div>
                  <div 
                    className="agenda-location agenda-location-link"
                    onClick={onOpenMap}
                    title="View Map"
                  >
                    {item.location}
                  </div>
                </div>
                <div>
                  <h3 className="agenda-title">{item.title}</h3>
                  {item.speaker && <p className="agenda-speaker">{item.speaker}</p>}
                  {item.description && <p className="agenda-description">{item.description}</p>}
                </div>
              </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Agenda;
