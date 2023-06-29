import { createUseStyles } from 'react-jss';
import topSectionBackground from '../../assets/images/top-section-background.jpg';

export const topSectionStyles = () => ({
  root: {
    background: {
      image: `url(${topSectionBackground})`,
      repeat: 'no-repeat',
      size: '100%',
    },
    order: 0,
  },
  container: {
    paddingTop: 202,
  },
});

export const useTopSectionStyles = createUseStyles(topSectionStyles, {
  name: 'TopSection',
});
