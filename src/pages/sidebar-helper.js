import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button/'

const TemplateContext = createContext({
  isSidebarOpen: true
});

class SidebarHelper extends React.Component {
  render() {
    return (
      <TemplateContext.Provider
        value={ {
          isSidebarOpen: false,
          addSidebar: () => console.log('as')
        } }
      >
        <TemplateContext.Consumer>
          {(context) => (
            <div>
              isSidebarOpen is { context.isSidebarOpen.toString() }
              <Button
                onClick={ () => context.addSidebar() }
              >
                Open Sidebar
              </Button>
            </div>
          )}
        </TemplateContext.Consumer>
      </TemplateContext.Provider>
    );
  }
}

export default SidebarHelper;
