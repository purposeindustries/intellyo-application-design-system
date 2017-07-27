import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

export default class Buttons extends Component {
  displayName = 'ButtonsPage'
  render() {
    return (
      <div>
        <DisplayText>Inputs</DisplayText>
        <div className="inputs-page">
          <Card>
            <Row>
              <Col span={ 3 }>
                <Input danger={ true } placeholder="Danger" icon={ (<Icon icon="ion-close-circled" />) } />
              </Col>
              <Col span={ 3 }>
                there
              </Col>
              <Col span={ 3 }>
                World!
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
