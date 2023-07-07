import { createUseStyles } from 'react-jss';

export const destinationsStyles = (theme) => ({
  root: {
    order: 3,
    backgroundColor: theme.palette.background.general,
  },
  form: {
    width: '100%',
    maxWidth: 624,
    height: 64,
    background: theme.palette.background.stroke,
    borderRadius: 8,
    marginBottom: 64,
    display: 'flex',
    position: 'relative',
  },
  input: {
    position: 'absolute',
    opacity: 0,

    '&:checked + $label': {
      color: theme.palette.text.main,
      backgroundColor: theme.palette.blue.accent,
    },
  },
  label: {
    width: 192,
    height: '100%',
    fontWeight: 400,
    fontSize: 24,
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderRadius: 8,
    padding: 16,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  labelPlaces: {
    width: 238,
  },
  countries: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
  },
  countryBlockHidden: {
    width: 296,
    marginLeft: 0,
    marginRight: 0,

    '&:nth-child(n + 5)': {
      display: 'none',
    },
  },
  countryBlock: {
    width: 296,
    marginLeft: 0,
    marginRight: 0,
  },
  countryImage: {
    width: '100%',
    height: 296,
  },
  imageBlock: {
    width: 296,
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
    background: theme.palette.background.general,
    border: `1px solid ${theme.palette.blue.accent}`,
    borderRadius: 8,
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.blue.accent,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  country: {
    fontWeight: 400,
    fontSize: 24,
    color: theme.palette.blue.accent,
    marginTop: 24,
    marginBottom: 64,
  },
  circleArrow: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: theme.palette.background.stroke,
    boxShadow: '0 2px 5px rgba(56, 56, 56, 50)',
    margin: '0 auto 120px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  arrowHiddenBlock: {
    width: 12,
    height: 12,
    border: `2px solid ${theme.palette.grey.additional}`,
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(45deg) skew(-8deg, -8deg) translate(150%, 10%)',
  },
  arrow: {
    width: 13,
    height: 13,
    border: `2px solid ${theme.palette.grey.additional}`,
    borderLeft: 0,
    borderTop: 0,
    borderBottomRightRadius: 2,
    transform: 'rotate(-135deg) skew(-8deg, -8deg) translate(-165%, -35%)',
  },
});

export const useDestinationsStyles = createUseStyles(destinationsStyles, {
  name: 'Destinations',
});
