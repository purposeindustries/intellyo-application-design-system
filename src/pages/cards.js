import React, { Component } from 'react';
import Cards from '../components/cards';

export default class CardsPage extends Component {
  static displayName = 'CardsPage'

  render() {
    return (
      <div className="page-cards">
        <Cards style="basic" />
      </div>
    );
  }
}
