import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input from '../components/input';
import Select from '../components/select';
import DropdownItem from '../components/dropdown-item';
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
    this.handleSelect = this.handleSelect.bind(this);
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
                  id="car"
                  label="Choose"
                  onChange={ this.handleSelect }
                >
                  <DropdownItem
                    value="hello"
                  >
                    Hello
                  </DropdownItem>
                  <DropdownItem
                    value="yeah"
                  >
                    yeah dafdsfa
                  </DropdownItem>
                  <DropdownItem
                    value="what"
                  >
                    what
                  </DropdownItem>
                  <DropdownItem
                    value="where"
                  >
                    where
                  </DropdownItem>
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
