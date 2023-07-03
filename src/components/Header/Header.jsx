import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

//slices
import { changeStatus } from '../../store/slices/auth.slice';
import { toggleThemeMode } from '../../store/slices/theme.slice';

//constants
import { authStatuses } from '../../services/constants/authStatuses';

//components
import { Container } from '../Container';
import { Icon } from '../Icon';
import { IconAccount } from '../Icon/IconAccount';
import { SignOutDropdown } from '../SignOutDropdown';

//styles
import { useHeaderStyles } from './Header.styles';

export const Header = ({ className }) => {
  const theme = useTheme();
  const classes = useHeaderStyles({ theme });

  const [showSignOutDropdown, setShowSignOutDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const themeValue = useSelector((state) => state.theme);

  const openDropdown = () => {
    if (location.pathname !== '/sign-in') {
      setShowSignOutDropdown(true);
    }
  };

  const signOut = () => {
    dispatch(changeStatus(authStatuses.loggedOut));
    navigate('/sign-in');
  };

  const toggleTheme = () => {
    const nextTheme = themeValue.mode !== 'light' ? 'light' : 'dark';
    dispatch(toggleThemeMode(nextTheme));
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
            {themeValue.mode === 'light' ? (
              <Icon
                className={classes.light}
                hrefIconName="#light-mode"
                onClick={toggleTheme}
              />
            ) : (
              <Icon
                className={classes.dark}
                hrefIconName="#dark-mode"
                onClick={toggleTheme}
              />
            )}
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
