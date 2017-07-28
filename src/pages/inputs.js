import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

export default class Inputs extends Component {
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
                  error={
                  {
                    hasError: true,
                    message: 'This field is required.'
                  } }
                  placeholder="Error"
                  required
                />
                <Input
                  disabled
                  placeholder="Disabled"
                />
                <Input
                  placeholder="Input with an icon"
                  icon={ (<Icon icon="ion-search" />) }
                />
                <Input
                  placeholder="example@gmail.com"
                  label="Email:"
                  id="email"
                  type="email"
                  required
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
