import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  static displayName = 'HTML'
  static propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.node,
    postBodyComponents: PropTypes.node
  }

  render() {
    let css;
    // eslint-disable-next-line no-process-env
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={ {
            __html: require('!raw!../public/styles.css'),
          } }
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={ { __html: this.props.body } }
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
