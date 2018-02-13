import React, { Component } from 'react';
import Logo from '../logo';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';

class SidebarItem extends Component {
  static displayName = 'SidebarItem'

  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    open: PropTypes.bool,
    expandable: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.node),
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  render() {
    return (
      <li
        className={
          classNames('sidebar-item', this.props.className, {
            'sidebar-item--expanded': this.props.expandable && this.state.open
          })
        }
      >
        <a
          href={ this.props.href }
          onClick={ (e) => {
            if (this.props.expandable) {
              e.preventDefault();
              this.setState(state => ({
                ...state,
                open: !state.open
              }));
            }
            this.props.onClick(e);
          } }
        >
          { this.props.children }
          { this.props.items && (
            <span>
              <Icon icon="ion-ios-arrow-right" className="icon-arrow icon-arrow-right" />
              <Icon icon="ion-ios-arrow-down" className="icon-arrow icon-arrow-down" />
            </span>
          ) }
        </a>
        {
          this.props.items && (
            <ul>
              { this.props.items }
            </ul>
          )
        }
      </li>
    );
  }
}

const Sidebar = (props) => (
  <aside
    className="sidebar"
  >
    <div className="logo">
      <a href="/">{ props.head || <Logo /> }</a>
    </div>
    <nav>
      <ul>
        { props.children }
      </ul>
    </nav>
    <a className="saucelabs-logo-wrapper" href="https://saucelabs.com">
      <div>
        <p className="saucelabs-logo-text">Testing powered by</p>
        <img className="saucelabs-logo" src="https://saucelabs.com/content/images/logo.png" alt="Tests powered by Saucelabs" />
      </div>
    </a>
  </aside>
);

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  children: PropTypes.node,
  head: PropTypes.node,
};

export { SidebarItem };

export default Sidebar;
