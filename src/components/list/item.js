import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    return (
      <div className="intellyo-list-item">
        { this.props.text }
        <button onClick={ this.props.onRemove }>Remove</button>
      </div>
    );
  }
}

Item.displayName = 'Item';

Item.propTypes = {
  text: PropTypes.node,
  onRemove: PropTypes.func
};

export default Item;
