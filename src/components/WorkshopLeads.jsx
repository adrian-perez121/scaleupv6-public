import React, { useEffect, useRef } from 'react';
import { workshopLeads } from '../data/speakers';

const WorkshopLeads = ({ onItemClick }) => {
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
    <section ref={sectionRef} id="speakers" className="section content-section">
      <div className="container">
        <h2 className="section-title">Workshop Leads & Faculty</h2>
        <div className="section-title-separator"></div>
        <div className="workshop-leads-grid">
          {workshopLeads.map((speaker, index) => (
            <div 
              key={index} 
              className="workshop-speaker-card speaker-card speaker-card-animate"
              onClick={() => onItemClick(speaker)}>
              <img src={speaker.img} alt={speaker.name} className="speaker-img" />
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopLeads;
