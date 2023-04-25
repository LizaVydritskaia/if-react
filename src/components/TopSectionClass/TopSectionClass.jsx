import React, { Component } from 'react';

import { Container } from '../Container';
import { FormClass } from '../FormClass';
import { Header } from '../Header';
import { Icon } from '../Icon';

import './TopSectionClass.css';

export class TopSectionClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="top-section">
        <Header />
        <Container className="top-section__container">
          <h1 className="top-section__title">
            Discover stays
            <br />
            to live, work or just relax
          </h1>
          <FormClass />
          <div className="top-section__apps">
            <Icon
              className="top-section__apps--google-play"
              hrefIconName="#google-play"
            />
            <Icon
              className="top-section__apps--app-store"
              hrefIconName="#app-store"
            />
          </div>
        </Container>
      </section>
    );
  }
}
