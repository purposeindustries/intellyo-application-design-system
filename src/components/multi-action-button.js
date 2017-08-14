import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

export default class MultiActionButton extends React.Component {
  static displayName = 'Multi Action Button';
  static propTypes = {
    children: PropTypes.element,
  }
  state = {
    displayDropdown: false,
  }
  dropdownDisplay() {
    this.setState({
      displayDropdown: !this.state.displayDropdown
    });
  }
  render() {
    return (
      <div>
        <div className="multi-action-button-wrapper">
          <button type="button" className="multi-action-button multi-action-button-default">Default action</button>
          <button type="button" className="multi-action-button multi-action-button-default-caret" onClick={ () => this.dropdownDisplay() }>
            <Icon icon="ion-android-arrow-dropdown" />
          </button>
        </div>
        <ul className="multi-action-button-dropdown-menu">
          { this.state.displayDropdown ? this.props.children : null }
        </ul>
      </div>
    );
  }
}
