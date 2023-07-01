import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

import { reviewsConfig } from './reviewsConfig';

import { Container } from '../Container';
import { Title } from '../Title';

import { useReviewsStyles } from './Reviews.styles';

export const Reviews = () => {
  const theme = useTheme();
  const classes = useReviewsStyles({ theme });

  return (
    <section className={classes.root}>
      <Container>
        <Title content="Guests reviews" />
        <div className={classes.blocksList}>
          {reviewsConfig.map((review) => {
            return (
              <div
                key={review.id}
                className={classNames(
                  'col-lg-4 col-md-6 col-sm-6',
                  classes.block,
                )}
              >
                <div className={classes.img}>
                  <img src={review.image} alt={review.hotelName} />
                  <div className={classes.price}>
                    <p>
                      From <span>{review.price}</span>
                    </p>
                  </div>
                </div>
                <div className={classes.hotel}>
                  <div>
                    <p className={classes.hotelName}>{review.hotelName}</p>
                    <p className={classes.hotelLocation}>
                      {review.hotelLocation}
                    </p>
                  </div>
                  <div className={classes.rating}>
                    <div className={classes.score}>
                      <span>{review.score}</span>
                    </div>
                    <p className={classes.amount}>{review.reviewsAmount}</p>
                  </div>
                </div>
                <div className={classes.name}>
                  <svg className={classes.userLogo}>
                    <use href="#user-logo" />
                  </svg>
                  <div>
                    <p className={classes.userName}>{review.userName}</p>
                    <p className={classes.country}>
                      <span>
                        <img
                          src={review.userCountryLogo}
                          alt={review.userCountry}
                        />
                      </span>
                      {review.userCountry}
                    </p>
                  </div>
                </div>
                <p className={classes.text}>{review.text}</p>
              </div>
            );
          })}
          <div className={classes.circleArrow}>
            <div className={classes.arrow}></div>
          </div>
        </div>
        <div className={classes.paginator}>
          <div className={classes.paginatorFill}></div>
          <div className={classes.paginatorEmpty}></div>
          <div className={classes.paginatorEmpty}></div>
          <div className={classes.paginatorEmpty}></div>
        </div>
      </Container>
    </section>
  );
};
