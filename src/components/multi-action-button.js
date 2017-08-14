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
  displayDropdown() {
    this.setState({
      displayDropdown: !this.state.displayDropdown
    });
  }
  render() {
    return (
      <div className="multi-action-button-dropdown-component">
        <div className="multi-action-button-wrapper">
          <button type="button" className="multi-action-button multi-action-button-default">Default action</button>
          <button type="button" className="multi-action-button multi-action-button-default-caret" onClick={ () => this.displayDropdown() }>
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
