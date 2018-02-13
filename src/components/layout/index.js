import React, {createContext} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const LayoutContext = createContext({
  isSidebarVisible: true
});

export class Layout extends React.Component {
  static displayName = 'Layout';

  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    isSidebarVisible: false
  };

  render() {
    return (
      <LayoutContext.Provider
        value={ {
          showSidebar: () => this.setState({ isSidebarVisible: true }),
          hideSidebar: () => this.setState({ isSidebarVisible: false }),
          isSidebarVisible: this.state.isSidebarVisible,
        } }
      >
        <LayoutContext.Consumer>
          {(context) => (
            <div
              className={ cx('layout-root', {
                'sidebar-visible': context.isSidebarVisible,
                'sidebar-hidden': !context.isSidebarVisible
              }) }
            >
              { this.props.children }
            </div>
          )}
        </LayoutContext.Consumer>
      </LayoutContext.Provider>
    );
  }
}


export const Sidebar = ({ children }) => (
  <aside className="sidebar">
    <nav className="sidebar-navigation">
      { children }
    </nav>
  </aside>
);

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default {
  Provider: Layout,
  Consumer: LayoutContext.Consumer
};
