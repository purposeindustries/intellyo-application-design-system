import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar, { SidebarItem } from '../components/sidebar';

import '../../css/main.css';

export default class Template extends React.Component {
  static displayName = 'Template';
  static propTypes = {
    children: PropTypes.func,
  }
  render() {
    return (
      <div className="main">
        <Helmet
          title="Intellyo's Application Design System"
          meta={ [
            { name: 'description', content: 'The official style guide to build awesome applications here at Intellyo' },
            { name: 'keywords', content: 'intellyo, design system, ux, style guide, frontend framework, fef' },
          ] }
        />
        <Sidebar>
          <SidebarItem href="/grid">
            Grid System
          </SidebarItem>
          <SidebarItem href="/typography">
            Typography
          </SidebarItem>
          <SidebarItem href="/colors">
            Colors
          </SidebarItem>
          <SidebarItem
            expandable={ true }
            items={ ([
              <SidebarItem key="sidebar-item-buttons" href="/buttons">
                Buttons
              </SidebarItem>,
              <SidebarItem key="sidebar-item-inputs" href="/inputs">
                Inputs
              </SidebarItem>,
              <SidebarItem key="sidebar-item-tags" href="/tagsinput">
                TagsInput
              </SidebarItem>,
              <SidebarItem key="sidebar-item-avatars" href="/avatars">
                Avatars
              </SidebarItem>,
              <SidebarItem key="sidebar-item-popovers" href="/popovers">
                Popovers
              </SidebarItem>,
              <SidebarItem key="sidebar-item-cards" href="/cards">
                Cards
              </SidebarItem>
            ]) }
          >
            Components
          </SidebarItem>
          <SidebarItem href="/icons">
            Icons
          </SidebarItem>
        </Sidebar>
        <div className="content">
          { this.props.children() }
        </div>
      </div>
    );
  }
}
