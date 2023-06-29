import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { changeStatus } from '../../store/slices/auth.slice';
import { authStatuses } from '../../services/constants/authStatuses';

//components
import { Container } from '../Container';
import { Icon } from '../Icon';
import { IconAccount } from '../Icon/IconAccount';
import { SignOutDropdown } from '../SignOutDropdown';

//styles
import { useHeaderStyles } from './Header.styles';

export const Header = ({ className }) => {
  const classes = useHeaderStyles();

  const [showSignOutDropdown, setShowSignOutDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const openDropdown = () => {
    if (location.pathname !== '/sign-in') {
      setShowSignOutDropdown(true);
    }
  };

  const signOut = () => {
    dispatch(changeStatus(authStatuses.loggedOut));
    navigate('/sign-in');
  };

  return (
    <Container>
      <header className={classNames(classes.root, className)}>
        <Link to="/">
          <Icon className={classes.logo} hrefIconName="#logo" />
        </Link>
        <nav className={classes.nav}>
          <div className={classes.staysAttractions}>
            <span className={classNames(classes.stays, classes.hoverLine)}>
              <a href="#" className={classes.link}>
                Stays
              </a>
            </span>
            <span
              className={classNames(classes.attractions, classes.hoverLine)}
            >
              <a href="#" className={classes.link}>
                Attractions
              </a>
            </span>
          </div>
          <div className={classes.nightAccount}>
            <Icon className={classes.night} hrefIconName="#night" />
            <IconAccount onClick={openDropdown} />
            <SignOutDropdown
              onClick={signOut}
              showSignOutDropdown={showSignOutDropdown}
            />
            <Icon className={classes.menu} hrefIconName="#menu" />
          </div>
        </nav>
      </header>
    </Container>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};
