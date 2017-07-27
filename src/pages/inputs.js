import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
// import Icon from '../components/icon';

export default class Buttons extends Component {
  displayName = 'InputsPage'
  render() {
    return (
      <div>
        <DisplayText>Inputs</DisplayText>
        <div className="inputs-page">
          <Card>
            <Row>
              <Col span={ 3 }>
                <Input
                  placeholder="Basic"
                />
                <Input
                  error
                  placeholder="Error"
                  required
                  errorMessage="This field is required."
                />
                <Input
                  disabled
                  placeholder="Disabled"
                />
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
