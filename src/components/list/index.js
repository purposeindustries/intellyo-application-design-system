import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

class List extends React.Component {
  render() {
    return (
      <div className="intellyo-list">
        { this.props.items.map(this.props.children) }
        <div
          className="list-new-button-wrap"
          onClick={ this.props.onAddClick }
        >
          <Button
            icon={ <Icon icon="ion-plus-round" /> }
            neutral={ true }
          />
          <div>{ this.props.newItemDescription }</div>
        </div>
      </div>
    );
  }
}

List.displayName = 'List';

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  renderItem: PropTypes.func.isRequired,
  onAddClick: PropTypes.func,
  newItemDescription: PropTypes.node,
  children: PropTypes.node.isRequired,
};

List.defaultProps = {
  newItemDescription: 'Add new item'
};


export default List;
