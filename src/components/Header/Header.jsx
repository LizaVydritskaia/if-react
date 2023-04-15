import React from 'react';

//components
import { Container } from '../Container';

//icons
import { Account, Logo, Menu, Night } from '../../assets/icons';

//styles
import './Header.css';

export const Header = () => (
  <Container>
    <header className="header">
      <Logo />
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
          <Night />
          <Account />
          <Menu />
        </div>
      </nav>
    </header>
  </Container>
);
