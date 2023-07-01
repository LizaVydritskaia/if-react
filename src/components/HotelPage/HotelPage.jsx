import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from 'react-jss';

//components
import { Container } from '../Container';
import { Footer } from '../Footer';
import { Header } from '../Header';

//styles
import { useHotelPageStyles } from './HotelPage.styles';

export const HotelPage = () => {
  const theme = useTheme();
  const classes = useHotelPageStyles({ theme });

  const location = useLocation();
  const { state } = location;

  return (
    <>
      <div className={classes.headerWrap}>
        <Header className={classes.header} />
      </div>
      <div className={classes.contentWrap}>
        <Container>
          <section className={classes.root}>
            <img
              className={classes.image}
              src={state.imageUrl}
              alt={state.name}
            />
            <div className={classes.description}>
              <p className={classes.name}>{state.name}</p>
              <p className={classes.location}>
                {state.city}, {state.country}
              </p>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
};
