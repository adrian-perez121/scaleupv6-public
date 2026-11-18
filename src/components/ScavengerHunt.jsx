import React, { useEffect, useRef } from 'react';
import { scavengerHuntClues } from '../data/scavengerHunt';

const ScavengerHunt = () => {
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
    cardsToAnimate.forEach((card) => observer.observe(card));

    return () => {
      cardsToAnimate.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} id="scavenger-hunt" className="section content-section">
      <div className="container">
        <h2 className="section-title section-title-tight">Scavenger Hunt</h2>
        <p className="section-subtitle-link">Solve the riddles to find the hidden ElCoMon!</p>
        <div className="section-title-separator"></div>
        <div className="hunt-grid">
          {scavengerHuntClues.map((clue, index) => (
            <div key={index} className="hunt-card speaker-card-animate">
              <div className="hunt-bot-box">
                <img src={clue.bot} alt="" className="hunt-bot" />
              </div>
              <div className="hunt-text">
                <h3 className="hunt-title">Hint {index + 1}</h3>
                <p className="hunt-riddle">{clue.riddle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScavengerHunt;
