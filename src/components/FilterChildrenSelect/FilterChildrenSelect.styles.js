import { createUseStyles } from 'react-jss';

export const filterChildrenSelectStyles = (theme) => ({
  filterChildren: {
    paddingTop: 28,
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.grey.primary,
    display: 'block',
  },
});

export const useFilterChildrenSelectStyles = createUseStyles(
  filterChildrenSelectStyles,
  { name: 'FilterChildrenSelect' },
);
