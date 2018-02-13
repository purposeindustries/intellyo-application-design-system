import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MenuPanel, { MenuPanelItem } from '../components/menu-panel/';

import '../css/main.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Intellyo Application Design System"
    />
    <div className="main">
      <MenuPanel>
        <MenuPanelItem href="/grid">
          Grid System
        </MenuPanelItem>
        <MenuPanelItem href="/typography">
          Typography
        </MenuPanelItem>
        <MenuPanelItem href="/colors">
          Colors
        </MenuPanelItem>
        <MenuPanelItem
          expandable={ true }
          items={ ([
            <MenuPanelItem key="menu-panel-item-buttons" href="/buttons">
              Buttons
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-inputs" href="/inputs">
              Inputs
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-select" href="/select">
              Select
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-tags" href="/tagsinput">
              TagsInput
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-avatars" href="/avatars">
              Avatars
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-cards" href="/cards">
              Cards
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-tooltips" href="/tooltip">
              Tooltips
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-popovers" href="/popover">
              Popovers
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-tables" href="/tables">
              Tables
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-charts" href="/charts">
              Charts
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-accordions" href="/accordions">
              Accordions
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-modals" href="/modals">
              Modals
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-sections" href="/sections">
              Sections
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-tabs" href="/tabs">
              Tab panels
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-confirmations" href="/confirmations">
              Confirmations
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-item-lists" href="/lists">
              Lists
            </MenuPanelItem>,
            <MenuPanelItem key="menu-panel-sidebar-helper" href="/sidebar-helper">
              Sidebar Helper
            </MenuPanelItem>,
          ]) }
        >
          Components
        </MenuPanelItem>
        <MenuPanelItem href="/icons">
          Icons
        </MenuPanelItem>
      </MenuPanel>
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
