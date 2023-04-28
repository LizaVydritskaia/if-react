import React, { Component } from 'react';

import { Arrow } from '../Arrow';
import { Container } from '../Container';
import { Hotel } from '../Hotel';
import { Title } from '../Title';

import './AvailableHotelsClass.css';

import { getAvailableHotels } from '../../services/availableHotels';

export class AvailableHotelsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableHotels: [],
    };

    this.filterHotels = this.filterHotels.bind(this);
  }

  componentDidMount() {
    getAvailableHotels(this.props.searchParams).then((hotels) =>
      this.setState({ availableHotels: hotels }),
    );
  }

  filterHotels() {
    return this.state.availableHotels.filter((item) => {
      return (
        item.name.toLowerCase().includes(this.props.searchParams) ||
        item.city.toLowerCase().includes(this.props.searchParams) ||
        item.country.toLowerCase().includes(this.props.searchParams)
      );
    });
  }

  render() {
    return (
      this.props.showAvailableHotelsBlock && (
        <section className="available-hotels">
          {this.props.searchParams}
          <Container>
            <Title content="Available hotels" />
            <div className="homes__hotels">
              <Hotel
                hotelsDataArray={this.filterHotels}
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
