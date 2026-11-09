import React from 'react';
import ScaleUpLogo from '../../assets/images/other/ScaleUPv6_ElCoMoN_logo.svg';
import { EVENT_TITLE } from '../config';

const Header = () => (
    <header className="site-header">
        <div className="container header-container">
            <div className="header-text-wrapper">
              <img src={ScaleUpLogo} alt="ScaleUPv6 ElCoMoN" className="header-banner-logo" />
                <h1 className="header-logo">
                    {EVENT_TITLE}
                </h1>
                <p className="header-subtitle">Hosted by El Camino College</p>
                <p className="header-theme">AI³: Imagine, Innovate, Inspire</p>
            </div>
        </div>
    </header>
);

export default Header;
