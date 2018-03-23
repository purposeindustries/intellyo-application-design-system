import React from 'react';
import Card from '../components/card';
import {
  Select,
  Multiselect,
} from '../components';
import DropdownItem from '../components/dropdown-item';
import OptionSeparator from '../components/option-separator';
import Option from '../components/option';
import Caption from '../components/caption';
import lipsum from 'lorem-ipsum';

export default class SelectPage extends React.Component {

  static displayName = 'SelectPage'

  state = {
    selected: [],
    car2: '',
    car: 'hello',
    extreme: '',
  }

  handleSelectChange = (value, id) => {
    this.setState({
      [id]: value
    });
  }

  handleMultiselectChange = (value) => {
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

  items = [<DropdownItem key="disabled" value="" disabled>Choose an option</DropdownItem>]
    .concat(lipsum({ count: 100, units: 'words' }).split(' ').map((value, i) => (
      <DropdownItem key={ i } value={ value }>
        { value }
      </DropdownItem>
  )));

  render() {
    return (
      <div className="select-page">
        <Card
          title="Select"
        >
          <Select
            id="car2"
            onChange={ this.handleSelectChange }
            value={ this.state.car2 }
          >
            <DropdownItem
              value={ '' }
              disabled
            >
              Choose an option
            </DropdownItem>
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

          <br /><br />

          <Select
            id="car"
            label={ <Caption>Select without a default value</Caption> }
            onChange={ this.handleSelectChange }
            value={ this.state.car }
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
          <br /><br />
          <Select
            id="extreme"
            value={ this.state.extreme }
            onChange={ this.handleSelectChange }
          >
            { this.items }
          </Select>
        </Card>
        <Card
          title="Multiselect"
        >
          <Multiselect
            id="dueDate"
            onChange={ this.handleMultiselectChange }
            selected={ this.state.selected }
            selectedLabel={ <span>picked</span> }
          >
            <Option value="today">Today</Option>
            <Option value="tomorrow">Tomorrow</Option>
            <Option value="soon">Soon</Option>
            <Option value="not-today">Not today</Option>
            <OptionSeparator>Other</OptionSeparator>
            <Option value="the-day-after-tomorrow">Day after tomorrow</Option>
          </Multiselect>
        </Card>
      </div>
    );
  }
}
