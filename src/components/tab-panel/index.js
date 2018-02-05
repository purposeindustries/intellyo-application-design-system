import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export class TabPanel extends React.Component {
  static displayName = 'TabPanel';
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    isSticky: PropTypes.bool,
  };

  state = {
    activeIndex: 0,
  };

  activate(n) {
    this.setState({
      activeIndex: n,
    });
  }

  render() {
    const activeTab = React.Children.toArray(this.props.children)[this.state.activeIndex];
    return (
      <div
        className={ cx('tab-panel-container', {
          'tab-panel-container--sticky': this.props.isSticky
        }) }
      >
        <div className="tab-list">
          { React.Children.map(this.props.children, (child, index) => (
            <div
              className={ cx('tab-panel-title', {
                'tab-panel-title--active': this.state.activeIndex === index
              }) }
              onClick={ () => this.activate(index) }
            >
              {child.props.title}
            </div>
            )) }
        </div>
        {activeTab}
      </div>
    );
  }
}

export class Tab extends React.Component {
  static displayName = 'Tab';
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  render() {
    return (
      <div className="tab">
        {this.props.children}
      </div>
    );
  }
}
