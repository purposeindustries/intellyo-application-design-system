import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/';

class Item extends React.Component {
  render() {
    return (
      <div className="intellyo-list-item">
        { this.props.text }
        <Icon
          onClick={ this.props.onRemove }
          icon="ion-ios-trash"
        />
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
