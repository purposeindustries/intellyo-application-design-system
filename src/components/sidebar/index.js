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
    className: PropTypes.string
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
    className={
      classNames('sidebar', props.className)
    }
  >
    <div className="logo">
      <Logo />
    </div>
    <nav>
      <ul>
        { props.children }
      </ul>
    </nav>
  </aside>
);

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export { SidebarItem };

export default Sidebar;
