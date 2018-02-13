import React from 'react';
import DisplayText from '../components/display-text/';
import Card from '../components/card/';
import Heading from '../components/heading/';

export default class Index extends React.Component {
  static displayName = 'IndexPage'
  render() {
    return (
      <div className="intellyo-index-page">
        <DisplayText tagName="h1">
          Intellyo's Application Design System
        </DisplayText>
        <Card className="index-main-card">
          <a href="/buttons">
            <Card><Heading>Buttons</Heading></Card>
          </a>
          <a href="/inputs">
            <Card><Heading>Inputs</Heading></Card>
          </a>
          <a href="/select">
            <Card><Heading>Select</Heading></Card>
          </a>
          <a href="/tagsinput">
            <Card><Heading>TagsInput</Heading></Card>
          </a>
          <a href="/avatars">
            <Card><Heading>Avatars</Heading></Card>
          </a>
          <a href="/cards">
            <Card><Heading>Cards</Heading></Card>
          </a>
          <a href="/tooltip">
            <Card><Heading>Tooltips</Heading></Card>
          </a>
          <a href="/popover">
            <Card><Heading>Popovers</Heading></Card>
          </a>
          <a href="/tables">
            <Card><Heading>Tables</Heading></Card>
          </a>
          <a href="/charts">
            <Card><Heading>Charts</Heading></Card>
          </a>
          <a href="/accordions">
            <Card><Heading>Accordions</Heading></Card>
          </a>
          <a href="/modals">
            <Card><Heading>Modals</Heading></Card>
          </a>
          <a href="/sections">
            <Card><Heading>Sections</Heading></Card>
          </a>
          <a href="/tabs">
            <Card><Heading>Tab</Heading> panels</Card>
          </a>
          <a href="/confirmations">
            <Card><Heading>Confirmations</Heading></Card>
          </a>
          <a href="/lists">
            <Card><Heading>Lists</Heading></Card>
          </a>
        </Card>


      </div>
    );
  }
}
