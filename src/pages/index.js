import React from 'react';
import DisplayText from '../components/display-text';

export default class Index extends React.Component {
  static displayName = 'IndexPage'
  render() {
    return (
      <div>
        <DisplayText tagName="h1">
          Intellyo's Application Design System
        </DisplayText>
        <p>Comming soon.</p>
      </div>
    );
  }
}
