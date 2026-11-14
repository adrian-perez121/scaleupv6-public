import React from 'react';
import { EVENT_TITLE } from '../config';
import surveyIcon from '../../assets/images/other/survey.svg';

const SurveyWidget = ({ isOpen, onToggle }) => {
  return (
    <>
      <button 
        onClick={() => onToggle(!isOpen)}
        aria-label="Open event message and exit survey"
        className="survey-button"
      >
        <img src={surveyIcon} alt="" className="widget-icon" />
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => onToggle(false)}>
          <div className="survey-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-button" onClick={() => onToggle(false)}>&times;</button>
            
            <h3 className="section-title widget-title">
              Feedback Survey!
            </h3>
            <div className="widget-separator"></div>
            
            <p className="survey-message">
                This survey is for after the event has concluded. Thank you for attending {EVENT_TITLE}! We hope you had fun! See you all next year! 
            </p>

            <div className="survey-section">
              <p className="survey-text">Please fill out the exit survey if you haven't already!</p>
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

export default SurveyWidget;
