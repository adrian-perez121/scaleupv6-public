import React from 'react';
import { EVENT_TITLE } from '../config';

const TimerWidget = ({ visible, isOpen, onToggle }) => {
  const TimerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  if (!visible) return null;

  return (
    <>
      <button 
        onClick={() => onToggle(!isOpen)}
        aria-label="Open Event Message"
        className="timer-button"
      >
        <TimerIcon />
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => onToggle(false)}>
          <div className="timer-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-button" onClick={() => onToggle(false)}>&times;</button>
            
            <h3 className="section-title widget-title">
                This Event Has Concluded
            </h3>
            <div className="widget-separator"></div>
            
            <p className="timer-message">
                Thank you for attending {EVENT_TITLE}! We hope you had fun! See you all next year! 
            </p>

            <div className="timer-survey">
              <p className="timer-survey-text">Please fill out the exit survey if you haven't already!</p>
              <a 
                href="https://forms.gle/3SCpLUiqCzWDWmQYA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="exit-survey-link"
              >
                Exit Survey
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default TimerWidget;
