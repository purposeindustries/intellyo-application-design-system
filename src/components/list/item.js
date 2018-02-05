import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/';
import Input from '../input/';
import Button from '../../../dist/button/';

class Item extends React.Component {
  state = {
    textInput: ''
  };

  handleChange = (e) => {
    this.setState({ textInput: e.target.value });
  };

  render() {
    if (this.props.isEditing) {
      return (
        <div className="intellyo-list-item list-item-editing">
          <Input
            defaultValue={ this.props.text }
            onChange={ this.handleChange }
          />
          <Button
            onClick={ () => this.props.onUpdate(this.state.textInput) }
          >
            Save
          </Button>
        </div>
      );
    }

    return (
      <div className="intellyo-list-item">
        { this.props.text }
        { this.props.onRemove &&
          <Icon
            onClick={ this.props.onRemove }
            icon="ion-ios-trash"
          />
        }
      </div>
    );
  }
}

Item.displayName = 'Item';

Item.propTypes = {
  text: PropTypes.node,
  onRemove: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  isEditing: PropTypes.bool,
  onUpdate: PropTypes.func,
};

Item.defaultProps = {
  onRemove: null,
  isEditing: false,
};

export default Item;
