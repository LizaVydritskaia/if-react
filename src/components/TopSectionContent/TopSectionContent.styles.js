import { createUseStyles } from 'react-jss';

export const topSectionContentStyles = () => ({
  title: {
    fontWeight: 500,
    fontSize: 50,
    lineHeight: '118%',
    color: 'var(--text-general-white)',
    marginBottom: 145,
  },
  apps: {
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
    paddingBottom: 120,
  },
  appStore: {
    width: 120,
    height: 40,
  },
  googlePlay: {
    width: 135,
    height: 40,
  },
});

export const useTopSectionContentStyles = createUseStyles(
  topSectionContentStyles,
  { name: 'TopSectionContent' },
);
