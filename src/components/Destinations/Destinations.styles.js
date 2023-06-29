import { createUseStyles } from 'react-jss';

export const destinationsStyles = () => ({
  root: {
    order: 3,
  },
  form: {
    width: '100%',
    maxWidth: 622,
    height: 64,
    background: 'var(--stroke-color)',
    borderRadius: 8,
    marginBottom: 65,
    display: 'flex',
    position: 'relative',
  },
  input: {
    position: 'absolute',
    opacity: 0,

    '&:checked + $label': {
      color: 'var(--text-general-white)',
      backgroundColor: 'var(--accent-blue)',
    },
  },
  label: {
    width: 192,
    height: '100%',
    fontWeight: 400,
    fontSize: 24,
    textAlign: 'center',
    color: 'var(--text-primary-color)',
    borderRadius: 8,
    padding: 17,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  labelPlaces: {
    width: 238,
  },
  countries: {
    display: 'flex',
  },
  countryBlock: {
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  countryImage: {
    width: '100%',
    height: 296,
  },
  imageBlock: {
    height: 296,
    position: 'relative',

    '&:hover $hoverBlock': {
      display: 'block',
      cursor: 'pointer',
    },
    '&:hover $hoverButton': {
      display: 'block',
      cursor: 'pointer',
    },
  },
  hoverBlock: {
    display: 'none',
    width: '100%',
    height: 296,
    backgroundColor: 'rgba(56, 56, 56, 0.4)',
    boxShadow: 'inset 0 4px 70px rgba(56, 56, 56, 0.5)',
    position: 'absolute',
    inset: 0,
  },
  hoverButton: {
    display: 'none',
    width: 128,
    height: 48,
    background: 'var(--text-general-white)',
    border: '1px solid var(--accent-blue)',
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 18,
    color: 'var(--accent-blue)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  country: {
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--accent-blue)',
    marginTop: 24,
    marginBottom: 48,
  },
  circleArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: 'var(--stroke-color)',
    boxShadow: '0 2px 5px rgba(56, 56, 56, 50)',
    margin: '0 auto 120px',
  },
  arrow: {
    width: 13,
    height: 13,
    border: '2px solid var(--text-primary-color)',
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(45deg) skew(-8deg, -8deg) translate(140%, 10%)',
  },
});

export const useDestinationsStyles = createUseStyles(destinationsStyles, {
  name: 'Destinations',
});
