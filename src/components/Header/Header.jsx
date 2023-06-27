import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useAuthContext } from '../../contexts/Auth.context';

//components
import { Container } from '../Container';
import { Icon } from '../Icon';
import { IconAccount } from '../Icon/IconAccount';
import { SignOutDropdown } from '../SignOutDropdown';

//styles
import './Header.css';

export const Header = ({ className }) => {
  const [showSignOutDropdown, setShowSignOutDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuthContext();

  const openDropdown = () => {
    if (location.pathname !== '/sign-in') {
      setShowSignOutDropdown(true);
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
    navigate('/sign-in');
  };

  return (
    <Container>
      <header className={classNames('header', className)}>
        <Link to="/">
          <Icon className="header__logo" hrefIconName="#logo" />
        </Link>
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
            <IconAccount onClick={openDropdown} />
            <SignOutDropdown
              onClick={signOut}
              showSignOutDropdown={showSignOutDropdown}
            />
            <Icon className="header__menu" hrefIconName="#menu" />
          </div>
        </nav>
      </header>
    </Container>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
