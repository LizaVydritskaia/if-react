import { createUseStyles } from 'react-jss';

export const filterChildrenSelectStyles = () => ({
  filterChildren: {
    paddingTop: 28,
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: 400,
    color: 'var(--dark-gray)',
    display: 'block',
  },
});

export const useFilterChildrenSelectStyles = createUseStyles(
  filterChildrenSelectStyles,
  { name: 'FilterChildrenSelect' },
);
