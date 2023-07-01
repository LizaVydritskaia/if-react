import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

import { offerConfig } from './offerConfig';

import { Container } from '../Container';

import { useOfferStyles } from './Offer.styles';

export const Offer = () => {
  const theme = useTheme();
  const classes = useOfferStyles({ theme });

  return (
    <section className={classes.root}>
      <Container>
        <h2 className={classes.title}>What do we offer</h2>
        <div className={classes.icons}>
          {offerConfig.map((item) => {
            return (
              <div
                key={item.id}
                className={classNames(
                  'col-lg-3 col-md-6 col-sm-4',
                  classes.iconBlock,
                )}
              >
                <div className={classes.icon}>
                  <svg className={classes[item.class]}>
                    <use href={item.icon} />
                  </svg>
                </div>
                <p className={classes.text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
