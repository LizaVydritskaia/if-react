import { createUseStyles } from 'react-jss';

export const topSectionStyles = () => ({
  root: {
    // background: {
    //   image: 'url("../../assets/images/top-section-background.jpg")',
    //   repeat: 'no-repeat',
    //   size: '100%',
    // },
    backgroundImage: 'url(../../assets/images/top-section-background.jpg)',
    order: 0,
  },
  container: {
    paddingTop: 202,
  },
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
});

export const useTopSectionStyles = createUseStyles(topSectionStyles, {
  name: 'TopSection',
});
