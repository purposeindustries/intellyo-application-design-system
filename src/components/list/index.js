import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const DefaultRenderItem = (props) => (
  <div>
    {
      Object.keys(props).map((key, index) => (
        <div key={ index }>{ props[key] }</div>
      ))
    }
  </div>
);

class List extends React.Component {
  state = {
    items: []
  };

  displayName = 'List';;


  render() {
    return (
      <div className="intellyo-list">
        { this.props.items.map(this.props.renderItem) }
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

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  renderItem: PropTypes.func,
  onAddClick: PropTypes.func,
  newItemDescription: PropTypes.node
};

List.defaultProps = {
  renderItem: DefaultRenderItem,
  newItemDescription: 'Add new item'
};

export default List;
