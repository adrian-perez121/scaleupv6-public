import React from 'react';
import Confetti from './Confetti';

const DateWidget = ({ visible, isOpen, onToggle }) => {
  const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  if (!visible) return null;

  return (
    <>
    <button 
        onClick={() => onToggle(!isOpen)}
        aria-label="Event Date"
        className="weather-widget-button"
      >
        <CalendarIcon />
    </button>
    
    {isOpen && (
        <div className="modal-overlay" onClick={() => onToggle(false)}>
            <Confetti />
            <div className="weather-modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={() => onToggle(false)}>&times;</button>
                <h3 className="section-title widget-title widget-title-spaced">Event Date</h3>
                <p className="date-message">
                    This event happened on Friday, November 21, 2025
                </p>
            </div>
        </div>
    )}
    </>
  );
};

export default DateWidget;
