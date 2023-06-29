import { createUseStyles } from 'react-jss';

export const signOutDropdownStyles = () => ({
  dropdown: {
    width: 192,
    height: 50,
    backgroundColor: 'var(--text-general-white)',
    border: '1px solid var(--light-gray)',
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    paddingLeft: 16,
    position: 'absolute',
    top: 70,
    right: 0,
    animation: '$showDropdown 150ms ease-in 1 forwards',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  '@keyframes showDropdown': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
  icon: {
    width: 20,
    height: 18,
  },
  text: {
    fontWeight: 400,
    fontSize: 20,
    color: 'var(--dark-gray)',
  },
});

export const useSignOutDropdownStyles = createUseStyles(signOutDropdownStyles, {
  name: 'SignOutDropdown',
});
