import React from 'react';
import Logo from './logo';
import PropTypes from 'prop-types';

const SidebarItem = (props) => (
  <li className="sidebar-item">
    <a href={ props.href }>
      { props.children }
    </a>
  </li>
);

SidebarItem.displayName = 'SidebarItem';

SidebarItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

const Sidebar = (props) => (
  <aside className="sidebar">
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
  children: PropTypes.node
};

export { SidebarItem };

export default Sidebar;
