import React from 'react';
import Layout, { Sidebar } from '../components/layout/';
import PropTypes from 'prop-types';

const StoryCreation = class extends React.Component {
  static propTypes = {
    onLoad: PropTypes.func
  };

  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    return (
      <div>
        Show the sidebar:<br />
        <a href="/layout-helper?sidebar=true">/layout-helper?sidebar=true</a><br />
        <br />
        Hide the sidebar:<br />
        <a href="/layout-helper?sidebar=false">/layout-helper?sidebar=false</a><br />
      </div>
    );
  }
};

const LayoutHelper = () => (
  <div className="layout-helper">
    <Layout.Provider>
      <Sidebar>
        I am the sidebar
      </Sidebar>
      <Layout.Consumer>
        {(context) => (
          <StoryCreation
            onLoad={ () => {
              if (window.location.href.indexOf('sidebar=true') !== -1) {
                context.showSidebar();
              } else {
                context.hideSidebar();
              }
            } }
          />
        )}
      </Layout.Consumer>
    </Layout.Provider>
  </div>
);

LayoutHelper.displayName = 'LayoutHelper';

export default LayoutHelper;
