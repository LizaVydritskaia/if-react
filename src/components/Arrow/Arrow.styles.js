import { createUseStyles } from 'react-jss';

export const arrowStyles = () => ({
  circleArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'var(--stroke-color)',
    boxShadow: '0 2px 5px rgba(56, 56, 56, 50)',
    position: 'absolute',
    top: '23%',
    right: '-20px',
  },
  arrow: {
    width: 13,
    height: 13,
    border: '2px solid var(--text-primary-color)',
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(-45deg) skew(-10deg, -5deg) translate(15%, 135%)',
  },
});

export const useArrowStyles = createUseStyles(arrowStyles, { name: 'Arrow' });
