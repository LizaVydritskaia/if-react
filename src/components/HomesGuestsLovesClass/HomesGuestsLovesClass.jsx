import React, { Component } from 'react';

import { Container } from '../Container';
import { Title } from '../Title';
import { Hotel } from '../Hotel';
import { Arrow } from '../Arrow';

import { getHotels } from '../../services/hotels';

import './HomesGuestsLovesClass.css';

export class HomesGuestsLovesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    getHotels().then((hotels) => this.setState({ hotels }));
  }

  render() {
    const { hotels } = this.state;

    return (
      <section className="homes">
        <Container>
          <Title content="Homes guests loves" />
          <div className="homes__hotels">
            <Hotel
              hotelsDataArray={hotels}
              className="col-lg-3 col-md-6 col-sm-3"
            />
            <Arrow />
          </div>
        </Container>
      </section>
    );
  }
}
