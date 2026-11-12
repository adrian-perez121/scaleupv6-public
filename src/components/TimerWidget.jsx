import React from 'react';
import { EVENT_TITLE } from '../config';
import surveyIcon from '../../assets/images/other/survey.svg';

const TimerWidget = ({ isOpen, onToggle }) => {
  return (
    <>
      <button 
        onClick={() => onToggle(!isOpen)}
        aria-label="Open event message and exit survey"
        className="timer-button"
      >
        <img src={surveyIcon} alt="" className="widget-icon" />
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
