import React from 'react';
import { TemplateContext } from './sidebar-context';
import Button from '../components/button/';

const SidebarHelperConsumer = () => (
  <TemplateContext.Consumer>
    {(context) => (
      <div>
        isSidebarOpen is <strong>{ context.isSidebarOpen.toString() }</strong>

        { !context.isSidebarOpen &&
        <Button
          onClick={ context.showSidebar }
        >
          Open Sidebar
        </Button>
        }

        { context.isSidebarOpen &&
        <Button
          onClick={ context.hideSidebar }
        >
          Close Sidebar
        </Button>
        }

      </div>
    )}
  </TemplateContext.Consumer>
);

SidebarHelperConsumer.displayName = 'SidebarHelperConsumer';

export default SidebarHelperConsumer;
