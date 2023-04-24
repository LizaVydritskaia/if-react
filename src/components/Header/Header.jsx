import React from 'react';

//components
import { Container } from '../Container';
import { Icon } from '../Icon';

//styles
import './Header.css';

export const Header = () => (
  <Container>
    <header className="header">
      <Icon className="header__logo" hrefIconName="#logo" />
      <nav className="header__nav">
        <div className="header__stays-attractions">
          <span className="header__stays header__hover-line">
            <a href="#" className="header__link">
              Stays
            </a>
          </span>
          <span className="header__attractions header__hover-line">
            <a href="#" className="header__link">
              Attractions
            </a>
          </span>
        </div>
        <div className="header__night-account">
          <Icon className="header__night" hrefIconName="#night" />
          <Icon className="header__account" hrefIconName="#account" />
          <Icon className="header__menu" hrefIconName="#menu" />
        </div>
      </nav>
    </header>
  </Container>
);
