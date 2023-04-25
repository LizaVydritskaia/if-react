import React, { Component } from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './AvailableHotelsClass.css';

export class AvailableHotelsClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.showAvailableHotelsBlock && (
        <section className="available-hotels">
          <Container>
            <Title content="Available hotels" />
            <div className="homes__hotels">
              <Hotel
                hotelsDataArray={this.props.filteredArray}
                className="col-lg-3 col-md-6 col-sm-3"
              />
              <Arrow />
            </div>
          </Container>
        </section>
      )
    );
  }
}
