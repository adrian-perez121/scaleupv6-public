import React from 'react';
import elcoLogoImage from '../../assets/images/other/elco_logo.png';

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-content-wrapper">
      <img
        src={elcoLogoImage}
        alt="El Camino College Logo placeholder"
        className="footer-logo"
      />
      <div className="footer-text">
        <p className="footer-paragraph">
            The El Camino Community College District is committed to providing an educational and employment environment in which no person is subjected to discrimination on the basis of actual or perceived race, color, ancestry, national origin, religion, creed, age (over 40), disability (mental or physical), sex, gender (including pregnancy and childbirth), sexual orientation, gender identity, gender expression, medical condition, genetic information, marital status, military and veteran status, or retaliation; or on any other basis as required by state and federal law.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
