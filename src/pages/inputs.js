import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Textarea from '../components/textarea';
import CharLimit from '../components/char-limit';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

export default class Inputs extends Component {
  displayName = 'Inputs'
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
                  error={ {message: 'This field is required.'} }
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
                <div className="input-wrapper">
                  <CharLimit limit={ 12 }>
                    <Input
                      placeholder="example@gmail.com"
                      label="Email:"
                      id="email"
                      type="email"
                      required
                    />
                  </CharLimit>
                </div>
              </Col>
              <Col span={ 3 }>
                there
              </Col>
              <Col span={ 3 }>
                <div className="input-wrapper">
                  <Textarea
                    placeholder="Text goes here..."
                  />
                </div>
                <div className="input-wrapper">
                  <Textarea
                    placeholder="Disabled"
                    disabled
                  />
                </div>
                <CharLimit limit={ 12 }>
                  <Textarea
                    placeholder="Text goes here..."
                  />
                </CharLimit>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
