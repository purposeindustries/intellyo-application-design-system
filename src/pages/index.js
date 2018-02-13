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
          <a key="sidebar-item-buttons" href="/buttons">
            <Card><Heading>Buttons</Heading></Card>
          </a>
          <a key="sidebar-item-inputs" href="/inputs">
            <Card><Heading>Inputs</Heading></Card>
          </a>
          <a key="sidebar-item-select" href="/select">
            <Card><Heading>Select</Heading></Card>
          </a>
          <a key="sidebar-item-tags" href="/tagsinput">
            <Card><Heading>TagsInput</Heading></Card>
          </a>
          <a key="sidebar-item-avatars" href="/avatars">
            <Card><Heading>Avatars</Heading></Card>
          </a>
          <a key="sidebar-item-cards" href="/cards">
            <Card><Heading>Cards</Heading></Card>
          </a>
          <a key="sidebar-item-tooltips" href="/tooltip">
            <Card><Heading>Tooltips</Heading></Card>
          </a>
          <a key="sidebar-item-popovers" href="/popover">
            <Card><Heading>Popovers</Heading></Card>
          </a>
          <a key="sidebar-item-tables" href="/tables">
            <Card><Heading>Tables</Heading></Card>
          </a>
          <a key="sidebar-item-charts" href="/charts">
            <Card><Heading>Charts</Heading></Card>
          </a>
          <a key="sidebar-item-accordions" href="/accordions">
            <Card><Heading>Accordions</Heading></Card>
          </a>
          <a key="sidebar-item-modals" href="/modals">
            <Card><Heading>Modals</Heading></Card>
          </a>
          <a key="sidebar-item-sections" href="/sections">
            <Card><Heading>Sections</Heading></Card>
          </a>
          <a key="sidebar-item-tabs" href="/tabs">
            <Card><Heading>Tab</Heading> panels</Card>
          </a>
          <a key="sidebar-item-modals" href="/confirmations">
            <Card><Heading>Confirmations</Heading></Card>
          </a>
          <a key="sidebar-item-lists" href="/lists">
            <Card><Heading>Lists</Heading></Card>
          </a>
        </Card>


      </div>
    );
  }
}
