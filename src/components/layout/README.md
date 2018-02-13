# Layout

A `Layout` component is using the `context` component of React. Layout is used to control the visibilty of certain UI components like sidebar, go-back-link etc from child components like `EIC dashboard`.

The Layout has the follwing context elements:

## Contexts

| Context | Type | Description |
| ---- | ---- | ----------- |
| showSidebar() | function | Call it within a `<Layout.Consumer>`'s render function body to show the page sidebar
| hideSidebar() | function | Vice versa
| isSidebarVisible | boolean | The `<Layout>` component handles natively the sidebar show/hide behaviour, so you do not need this boolan in practice nomrally


## Example

In the below example the `<StoryCreation>` component is able to control the visibility of the children elements of `<Sidebar>` via `showSidebar()` and `hideSidebar()` methods of context.

```
import Layout, { Sidebar } from '../components/layout/';

class StoryCreation extends React.Component {
  static propTypes = {
    onLoad: PropTypes.func
  };

  componentDidMount() {
    this.props.onLoad();
  }

  ...

  render() {
    ...
  }
};

class App extends React.Component {
  ...
  render() {
    return (
      ...
      <Layout.Provider>
        <Sidebar>
          ...
        </Sidebar>
        <Layout.Consumer>
          {(context) => (
            <StoryCreation
              onLoad={ () => {
                if (sidebarEnabled) {
                  context.showSidebar();
                } else {
                  context.hideSidebar();
                }
              } }
            />
          )}
        </Layout.Consumer>
      </Layout.Provider>
    )
  }
}


```
