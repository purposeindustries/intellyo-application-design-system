import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Select from '../components/select';
import Textarea from '../components/textarea';
import withLimit from '../components/with-limit';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

const TextareaWithLimit = withLimit(Textarea);
const InputWithLimit = withLimit(Input);

const textareaValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const inputValue = 'Content that connects.';

export default class Inputs extends Component {
  displayName = 'Inputs'

  constructor(props) {
    super(props);
    this.state = {
      bio: textareaValue,
      name: inputValue,
      car: 'opel'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSelect(value, id) {
    this.setState({
      [id]: value
    });
  }

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
                  <InputWithLimit
                    name="name"
                    placeholder="Basic with limit"
                    limit={ 12 }
                    value={ this.state.name }
                    onChange={ this.handleInputChange }
                  />
                </div>
              </Col>
              <Col span={ 3 }>
                <Select
                  name="car"
                  value={ this.state.car }
                  onChange={ this.handleInputChange }
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </Select>
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
                <TextareaWithLimit
                  name="bio"
                  limit={ 140 }
                  value={ this.state.bio }
                  placeholder="Text goes here"
                  onChange={ this.handleInputChange }
                />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
