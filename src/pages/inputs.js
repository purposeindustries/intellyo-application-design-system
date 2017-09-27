import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Input, { Suggestion, SuggestionWithImage } from '../components/input';
import Select from '../components/select';
import Multiselect from '../components/multiselect';
import Option from '../components/option';
import OptionSeparator from '../components/option-separator';
import DropdownItem from '../components/dropdown-item';
import PrefixedInput, { PrefixedItem } from '../components/prefixed-input';
import SocialPrefixedInput from '../components/social-prefixed-input';
import Textarea, {RichTextarea, InvisibleTextarea, autogrow} from '../components/textarea';
import withLimit from '../components/with-limit';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

const TextareaWithLimit = withLimit(Textarea);
const InputWithLimit = withLimit(Input);
const InvisibleAutgrowTextarea = autogrow(InvisibleTextarea);
const AutogrowTextarea = autogrow(Textarea);
const AutogrowTextareaWithLimit = withLimit(AutogrowTextarea);

const textareaValue = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const inputValue = 'Content that connects.';

export default class Inputs extends Component {
  displayName = 'Inputs'

  constructor(props) {
    super(props);
    this.state = {
      bio: textareaValue,
      name: inputValue,
      car: 'opel',
      autosuggest: {
        suggestions: [],
        value: ''
      },
      autosuggestImage: {
        suggestions: [],
        value: ''
      },
      prefixInput: {
        suggestions: [],
        value: ''
      },
      prefixValue: 'https://facebook.com/',
      invisibleTitle: 'This is an invisible textarea inside a header',
      html: textareaValue,
      selected: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMultiselect = this.handleMultiselect.bind(this);
    this.handleSocialPrefixedInput = this.handleSocialPrefixedInput.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSocialPrefixedInput() {
    return this.state.prefixValue + this.state.prefixInputValue;
  }

  handleSelect(value, id) {
    this.setState({
      [id]: value
    });
  }

  handleMultiselect(value) {
    if (this.state.selected.includes(value) === false) {
      this.setState((prevState) => {
        return {
          selected: prevState.selected.concat([value])
        };
      });
      return;
    }
    this.setState((prevState) => {
      return {
        selected: prevState.selected.filter(s => s !== value)
      };
    });
  }

  render() {
    return (
      <div>
        <div className="inputs-page">
          <DisplayText>Inputs</DisplayText>
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
              <Col span={ 6 }>
                <Multiselect
                  id="dueDate"
                  label={ this.state.selectedLabel }
                  onChange={ this.handleMultiselect }
                  selected={ this.state.selected }
                >
                  <Option value="today">Today</Option>
                  <Option value="tomorrow">Tomorrow</Option>
                  <Option value="soon">Soon</Option>
                  <Option value="not-today">Not today</Option>
                  <OptionSeparator>Other</OptionSeparator>
                  <Option value="the-day-after-tomorrow">Day after tomorrow</Option>
                </Multiselect>
                <Select
                  id="car"
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
                <Input
                  suggestions={ this.state.autosuggest.suggestions }
                  onFetchRequested={ () => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggest: {
                          ...state.autosuggest,
                          suggestions: ['Volvo']
                        }
                      };
                    });
                  } }
                  onClearRequested={ () => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggest: {
                          ...state.autosuggest,
                          suggestions: []
                        }
                      };
                    });
                  } }
                  renderSuggestion={ Suggestion }
                  getSuggestionValue={ (suggestion) => suggestion }
                  value={ this.state.autosuggest.value }
                  onChange={ (e, { newValue }) => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggest: {
                          ...state.autosuggest,
                          value: newValue
                        }
                      };
                    });
                  } }
                />
                <Input
                  suggestions={ this.state.autosuggestImage.suggestions }
                  onFetchRequested={ () => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggestImage: {
                          ...state.autosuggestImage,
                          suggestions: [{
                            title: 'Volvo',
                            image: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2003/06/12/hulk276d26.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=049472654061ed562dabba3d15278b20'
                          }, {
                            title: 'Volvo Evil Company',
                            image: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2003/06/12/hulk276d26.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=049472654061ed562dabba3d15278b20'
                          }, {
                            title: 'Volvo Very long Evil Company',
                            image: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2003/06/12/hulk276d26.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=049472654061ed562dabba3d15278b20'
                          }]
                        }
                      };
                    });
                  } }
                  onClearRequested={ () => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggestImage: {
                          ...state.autosuggestImage,
                          suggestions: []
                        }
                      };
                    });
                  } }
                  renderSuggestion={ SuggestionWithImage }
                  getSuggestionValue={ ({ title }) => {
                    return title;
                  } }
                  value={ this.state.autosuggestImage.value }
                  onChange={ (e, { newValue }) => {
                    this.setState((state) => {
                      return {
                        ...state,
                        autosuggestImage: {
                          ...state.autosuggestImage,
                          value: newValue
                        }
                      };
                    });
                  } }
                />
                <PrefixedInput
                  prefixValue="http"
                  value={ this.state.prefixInput.value }
                  onChange={ (e, { newValue }) => {
                    this.setState((state) => {
                      return {
                        ...state,
                        prefixInput: {
                          ...state.prefixInput,
                          value: newValue
                        }
                      };
                    });
                  } }
                >
                  <PrefixedItem
                    value="http"
                  >
                    http://
                  </PrefixedItem>
                  <PrefixedItem
                    value="https"
                  >
                    https://
                  </PrefixedItem>
                  <PrefixedItem
                    value="ftp"
                  >
                    ftp://
                  </PrefixedItem>
                  <PrefixedItem
                    value="mailto"
                  >
                    mailto:
                  </PrefixedItem>
                </PrefixedInput>
                <SocialPrefixedInput
                  onSelectChange={ (prefixChildrenValue) => {
                    this.setState({
                      prefixValue: prefixChildrenValue
                    }, () => this.handleSocialPrefixedInput());
                  } }
                  onInputChange={ (e) => {
                    this.setState({
                      prefixInputValue: e.target.value
                    }, () => this.handleSocialPrefixedInput());
                  } }
                >
                  <PrefixedItem
                    value="facebook"
                  >
                    https://facebook.com/
                  </PrefixedItem>
                  <PrefixedItem
                    value="twitter"
                  >
                    https://twitter.com/
                  </PrefixedItem>
                  <PrefixedItem
                    value="instagram"
                  >
                    https://instagram.com/
                  </PrefixedItem>
                  <PrefixedItem
                    value="pinterest"
                  >
                    https://pinterest.com/
                  </PrefixedItem>
                  <PrefixedItem
                    value="tumblr"
                  >
                    https://tumblr.com/
                  </PrefixedItem>
                  <PrefixedItem
                    value="youtube"
                  >
                    https://youtube.com/
                  </PrefixedItem>
                </SocialPrefixedInput>
                <SocialPrefixedInput>
                  <PrefixedItem value="facebook">facebook.com/</PrefixedItem>
                </SocialPrefixedInput>
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
            <Row>
              <Col span={ 3 }>
                <InvisibleTextarea
                  value={ this.state.bio }
                  onChange={ this.handleInputChange }
                  name="bio"
                />
              </Col>
              <Col span={ 3 }>
                <InvisibleAutgrowTextarea
                  value={ this.state.bio }
                  onChange={ this.handleInputChange }
                  name="bio"
                />
              </Col>
              <Col span={ 3 }>
                <AutogrowTextarea
                  value={ this.state.bio }
                  onChange={ this.handleInputChange }
                  name="bio"
                />
              </Col>
              <Col span={ 3 }>
                <AutogrowTextareaWithLimit
                  value={ this.state.bio }
                  onChange={ this.handleInputChange }
                  name="bio"
                  limit={ 140 }
                />
              </Col>
            </Row>
            <Row>
              <Col span={ 6 }>
                <DisplayText>
                  <InvisibleAutgrowTextarea
                    value={ this.state.invisibleTitle }
                    onChange={ this.handleInputChange }
                    name="invisibleTitle"
                  />
                </DisplayText>
              </Col>
              <Col span={ 6 }>
                <RichTextarea
                  placeholder="Placeholder text"
                  value={ this.state.bio }
                  onChange={ this.handleInputChange }
                  name="bio"
                />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
