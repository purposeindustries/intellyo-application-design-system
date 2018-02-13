import React from 'react';
import { TemplateContext } from './sidebar-context';
import Button from '../components/button/';

const MenuPanelHelperConsumer = () => (
  <TemplateContext.Consumer>
    {(context) => (
      <div>
        isMenuPanelOpen is <strong>{ context.isMenuPanelOpen.toString() }</strong>

        { !context.isMenuPanelOpen &&
        <Button
          onClick={ context.showMenuPanel }
        >
          Open MenuPanel
        </Button>
        }

        { context.isMenuPanelOpen &&
        <Button
          onClick={ context.hideMenuPanel }
        >
          Close MenuPanel
        </Button>
        }

      </div>
    )}
  </TemplateContext.Consumer>
);

MenuPanelHelperConsumer.displayName = 'MenuPanelHelperConsumer';

export default MenuPanelHelperConsumer;
