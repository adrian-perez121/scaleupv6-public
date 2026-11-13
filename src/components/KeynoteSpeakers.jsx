import React, { useEffect, useRef } from 'react';
import { keynoteSpeakers } from '../data/speakers';

const KeynoteSpeakers = ({ onItemClick, onOpenMap }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

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

    const cardsToAnimate = currentSection.querySelectorAll('.speaker-card-animate');
    cardsToAnimate.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsToAnimate.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="keynote-speakers" className="section content-section">
      <div className="container">
        <h2 className="section-title section-title-tight">Keynote Speakers</h2>
        <p
        className="section-subtitle-link agenda-location-link"
        onClick={onOpenMap}
        >
            Located in the Gymnasium
        </p>
        <div className="section-title-separator"></div>
        <div className="keynote-speakers-grid">
          {keynoteSpeakers.map((speaker, index) => (
            <div 
              key={index} 
              className="keynote-speaker-card speaker-card speaker-card-animate"
              onClick={() => onItemClick(speaker)}>
              <img src={speaker.img} alt={speaker.name} className="keynote-speaker-img" />
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
