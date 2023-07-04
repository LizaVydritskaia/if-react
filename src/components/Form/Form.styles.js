import { createUseStyles } from 'react-jss';

export const formStyles = (theme) => ({
  form: {
    maxWidth: 1232,
    height: 64,
    backgroundColor: theme.palette.form.background.general,
    border: `3px solid ${theme.palette.background.stroke}`,
    borderRightWidth: 0,
    borderRadius: 8,
    marginBottom: 120,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  labelDestination: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.main,
    position: 'absolute',
    top: '-48px',
    left: 22,
  },
  inputDestination: {
    width: '39%',
    height: 64,
    border: 'none',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: '22px 24px',
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,

    '&::placeholder': {
      fontWeight: 400,
      fontSize: 18,
      color: theme.palette.text.primary,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:focus::placeholder': {
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
  },
  labelCheckInOut: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.main,
    position: 'absolute',
    top: '-48px',
    left: '38%',
  },
  room: {
    width: '29%',
    display: 'flex',
    position: 'relative',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputRoomDash: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    padding: '21px 5px',
  },
  labelAdults: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    position: 'absolute',
    left: 47,
    top: 21,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputAdults: {
    width: '34%',
    height: 64,
    border: 'none',
    paddingLeft: 24,
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.form.background.general,

    '&::placeholder': {
      fontWeight: 400,
      fontSize: 18,
      color: theme.palette.text.primary,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  line: {
    width: 0,
    height: 0,
  },
  lineRight: {
    right: 0,
  },
  lineLeft: {
    left: 0,
  },
  children: {
    width: '33%',
    position: 'relative',
  },
  labelChildren: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    position: 'absolute',
    left: 25,
    top: 21,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputChildrenRoom: {
    width: '100%',
    height: 64,
    border: 'none',
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.form.background.general,

    '&::placeholder': {
      fontWeight: 400,
      fontSize: 18,
      color: theme.palette.text.primary,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputChildrenRoomBorder: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  formRoom: {
    width: '33%',
    paddingRight: 24,
    position: 'relative',
  },
  labelRoom: {
    fontWeight: 400,
    fontSize: 18,
    color: theme.palette.text.primary,
    position: 'absolute',
    left: 25,
    top: 21,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  button: {
    width: '16%',
    height: 64,
    backgroundColor: theme.palette.blue.accent,
    borderRadius: 8,
    border: 'none',
    fontWeight: 500,
    fontSize: 24,
    color: theme.palette.text.main,

    '&:hover': {
      cursor: 'pointer',
    },
  },
  '@media (max-width: 1024px)': {
    line: {
      width: 1,
      height: 32,
      backgroundColor: theme.palette.text.secondary,
      position: 'absolute',
      top: 8,
    },
    inputChildrenRoomBorder: {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
    },
  },
});

export const useFormStyles = createUseStyles(formStyles, { name: 'Form' });
