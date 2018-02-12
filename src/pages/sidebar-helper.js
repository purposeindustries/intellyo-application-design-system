import React from 'react';
import { TemplateContext } from './sidebar-context';
import SidebarHelperConsumer from './sidebar-helper-consumer';

class SidebarHelper extends React.Component {
  static displayName = SidebarHelper;

  state = {
    isSidebarOpen: false
  };

  render() {
    return (
      <TemplateContext.Provider
        value={ {
          openSidebar: () => this.setState({ isSidebarOpen: true }),
          isSidebarOpen: this.state.isSidebarOpen
        } }
      >
        <SidebarHelperConsumer />
      </TemplateContext.Provider>
    );
  }
}

export default SidebarHelper;
