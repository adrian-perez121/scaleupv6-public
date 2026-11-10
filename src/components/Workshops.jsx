import React, { useEffect, useRef } from 'react';
import { workshopItems } from '../data/workshops';

const Workshops = ({ onOpenMap }) => {
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

    const itemsToAnimate = currentSection.querySelectorAll('.workshop-item-animate');
    itemsToAnimate.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      itemsToAnimate.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="workshops" className="section content-section">
      <div className="container">
        <h2 className="section-title section-title-tight">Workshops</h2>
        <p
        className="section-subtitle-link agenda-location-link"
        onClick={onOpenMap}
        >
            All held in MBA Building
        </p>
        <div className="section-title-separator"></div>
        <div className="table-scroll">
          <table className="workshop-table">
            <thead className="workshop-thead">
              <tr>
                <th className="workshop-th workshop-th-title">Title</th>
                <th className="workshop-th workshop-th-location">Location</th>
                <th className="workshop-th workshop-th-presenter">Presenter</th>
              </tr>
            </thead>
            <tbody>
              {workshopItems.map((item, index) => (
                <tr
                  key={index}
                  className="workshop-tr workshop-item-animate"
                >
                  <td className="workshop-td" data-label="Title">{item.title}</td>
                  <td className="workshop-td" data-label="Location">{item.location}</td>
                  <td className="workshop-td" data-label="Presenter">{item.instructor}</td>
                </tr>
              ))}
              <tr className="workshop-tr">
                <td colSpan={4} className="workshop-td workshop-td-centered">
                    <div className="booth-fair">
                        <h4 className="booth-fair-title">Booth Fair</h4>
                        <p className="booth-fair-text">
                            Check out the demos and info from companies and student clubs on campus! Learn about the Robotics club, the Computing club, the Women in Technology club, the Google Student Developers club, and more!
                        </p>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
