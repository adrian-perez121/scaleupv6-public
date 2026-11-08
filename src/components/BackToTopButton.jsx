import React, { useState, useEffect } from 'react';

const BackToTopButton = ({ onClick, visible }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const shouldShow = isVisible && visible;

  return (
    <button
      onClick={onClick}
      aria-label="Go to top"
      className={`back-to-top-button${shouldShow ? ' is-shown' : ''}`}
    >
      &#8679;
    </button>
  );
};
export default BackToTopButton;
