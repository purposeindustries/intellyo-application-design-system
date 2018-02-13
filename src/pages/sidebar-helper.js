import React from 'react';
import { TemplateContext } from './sidebar-context';
import MenuPanelHelperConsumer from './sidebar-helper-consumer';

class MenuPanelHelper extends React.Component {
  static displayName = 'MenuPanelHelper';

  state = {
    isMenuPanelOpen: false
  };

  render() {
    return (
      <TemplateContext.Provider
        value={ {
          showMenuPanel: () => this.setState({ isMenuPanelOpen: true }),
          hideMenuPanel: () => this.setState({ isMenuPanelOpen: false }),
          isMenuPanelOpen: this.state.isMenuPanelOpen,
        } }
      >
        <MenuPanelHelperConsumer />
      </TemplateContext.Provider>
    );
  }
}

export default MenuPanelHelper;
