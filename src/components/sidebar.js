import React from 'react';
import Logo from './logo';

const SidebarItem = (props) => (
  <li className="sidebar-item">
    <a href={ props.href }>
      { props.children }
    </a>
  </li>
);

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

export { SidebarItem };

export default Sidebar;
