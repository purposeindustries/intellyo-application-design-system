import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

class List extends React.Component {

  static displayName = 'List';

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    onAddClick: PropTypes.func,
    newItemDescription: PropTypes.node,
    renderItem: PropTypes.func.isRequired,
    isEditing: PropTypes.bool,
  };

  static defaultProps = {
    newItemDescription: 'Add new item',
  };

  render() {
    return (
      <div className="intellyo-list">
        { this.props.items.map(this.props.renderItem) }
        { this.props.isEditing &&
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
        }
      </div>
    );
  }
}

export default List;
