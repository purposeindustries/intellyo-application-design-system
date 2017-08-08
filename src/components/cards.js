import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cards = (props) => (
  <div className={ classNames('cards', `card-${props.style}`) }>
  </div>
);

Cards.displayName = 'Cards';

Cards.propTypes = {
  style: PropTypes.string
};

export default Cards;
