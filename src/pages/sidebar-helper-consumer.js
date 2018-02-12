import React from 'react';
import { TemplateContext } from './sidebar-context';
import Button from '../components/button/';

const SidebarHelperConsumer = () => (
  <TemplateContext.Consumer>
    {(context) => (
      <div>
        isSidebarOpen is { context.isSidebarOpen.toString() }
        <Button
          onClick={ context.openSidebar }
        >
          Open Sidebar
        </Button>
      </div>
    )}
  </TemplateContext.Consumer>
);

SidebarHelperConsumer.displayName = 'SidebarHelperConsumer';

export default SidebarHelperConsumer;
