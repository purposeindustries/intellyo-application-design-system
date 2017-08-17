import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
// import Icon from '../components/icon';

export default class Popovers extends Component {
  displayName = 'Popovers'

  render() {
    return (
      <div>
        <DisplayText>Propovers</DisplayText>
        <div className="popovers-page">
          <Card>
            <Row>
              <Col span={ 3 }>
                Hi
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
