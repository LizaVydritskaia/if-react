import { createUseStyles } from 'react-jss';

export const loaderStyles = () => ({
  loader: {
    textAlign: 'center',

    '& img': {
      maxWidth: 300,
      padding: '80px 0',
    },
  },
});

export const useLoaderStyles = createUseStyles(loaderStyles(), {
  name: 'Loader',
});
