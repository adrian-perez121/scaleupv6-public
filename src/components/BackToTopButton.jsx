import React, { useState, useEffect } from 'react';
import arrowUpIcon from '../../assets/images/other/arrow-up.svg';

// Appears once the page is scrolled past `getTop()` (the top of the Pokédex)
const BackToTopButton = ({ onClick, getTop }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > getTop() + 100);
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [getTop]);

  return (
    <button
      onClick={onClick}
      aria-label="Back to top of the Pokédex"
      className={`back-to-top-button${isVisible ? ' is-shown' : ''}`}
    >
      <img src={arrowUpIcon} alt="" className="widget-icon" />
    </button>
  );
};
export default BackToTopButton;
