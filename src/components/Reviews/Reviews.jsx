import React from 'react';

import { reviewsConfig } from './reviewsConfig';

import { Container } from '../Container';
import { Title } from '../Title';

import './Reviews.css';

export const Reviews = () => {
  return (
    <section className="reviews">
      <Container>
        <Title content="Guests reviews" />
        <div className="reviews__blocks">
          {reviewsConfig.map((review) => {
            return (
              <div
                key={review.id}
                className="col-lg-4 col-md-6 col-sm-6 reviews__review-block"
              >
                <div className="reviews__img">
                  <img src={review.image} alt={review.hotelName} />
                  <div className="reviews__price">
                    <p>
                      From <span>{review.price}</span>
                    </p>
                  </div>
                </div>
                <div className="reviews__hotel">
                  <div className="reviews__name-location">
                    <p className="reviews__hotel-name">{review.hotelName}</p>
                    <p className="reviews__hotel-location">
                      {review.hotelLocation}
                    </p>
                  </div>
                  <div className="reviews__rating">
                    <div className="reviews__score">
                      <span>{review.score}</span>
                    </div>
                    <p className="reviews__amount">{review.reviewsAmount}</p>
                  </div>
                </div>
                <div className="reviews__name">
                  <svg className="reviews__user-logo">
                    <use href="#user-logo" />
                  </svg>
                  <div className="reviews__name-country">
                    <p className="reviews__user-name">{review.userName}</p>
                    <p className="reviews__country">
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
                <p className="reviews__text">{review.text}</p>
              </div>
            );
          })}
          <div className="reviews__circle-arrow">
            <div className="reviews__arrow"></div>
          </div>
        </div>
        <div className="reviews__paginator">
          <div className="reviews__paginator-fill"></div>
          <div className="reviews__paginator-empty"></div>
          <div className="reviews__paginator-empty"></div>
          <div className="reviews__paginator-empty"></div>
        </div>
      </Container>
    </section>
  );
};
