import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar, { SidebarItem } from '../components/sidebar/';

import '../css/main.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Intellyo Application Design System"
    />
    <div className="main">
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
            <SidebarItem key="sidebar-item-select" href="/select">
              Select
            </SidebarItem>,
            <SidebarItem key="sidebar-item-tags" href="/tagsinput">
              TagsInput
            </SidebarItem>,
            <SidebarItem key="sidebar-item-avatars" href="/avatars">
              Avatars
            </SidebarItem>,
            <SidebarItem key="sidebar-item-cards" href="/cards">
              Cards
            </SidebarItem>,
            <SidebarItem key="sidebar-item-tooltips" href="/tooltip">
              Tooltips
            </SidebarItem>,
            <SidebarItem key="sidebar-item-popovers" href="/popover">
              Popovers
            </SidebarItem>,
            <SidebarItem key="sidebar-item-tables" href="/tables">
              Tables
            </SidebarItem>,
            <SidebarItem key="sidebar-item-charts" href="/charts">
              Charts
            </SidebarItem>,
            <SidebarItem key="sidebar-item-accordions" href="/accordions">
              Accordions
            </SidebarItem>,
            <SidebarItem key="sidebar-item-modals" href="/modals">
              Modals
            </SidebarItem>,
            <SidebarItem key="sidebar-item-sections" href="/sections">
              Sections
            </SidebarItem>,
            <SidebarItem key="sidebar-item-tabs" href="/tabs">
              Tab panels
            </SidebarItem>,
            <SidebarItem key="sidebar-item-modals" href="/confirmations">
              Confirmations
            </SidebarItem>,
            <SidebarItem key="sidebar-item-lists" href="/lists">
              Lists
            </SidebarItem>,
            <SidebarItem key="sidebar-item-tiles" href="/tiles">
              Tiles
            </SidebarItem>,
          ]) }
        >
          Components
        </SidebarItem>
        <SidebarItem href="/icons">
          Icons
        </SidebarItem>
      </Sidebar>
      <div className="content">
        { children() }
      </div>
    </div>
  </div>
);

TemplateWrapper.displayName = 'Layout';

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
