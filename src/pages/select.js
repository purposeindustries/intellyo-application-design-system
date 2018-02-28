import React from 'react';
import Card from '../components/card';
import Select from '../components/select';
import Multiselect from '../components/multiselect';
import DropdownItem from '../components/dropdown-item';
import OptionSeparator from '../components/option-separator';
import Option from '../components/option';
import Caption from '../components/caption';
import Icon from '../components/icon/';

export default class SelectPage extends React.Component {

  static displayName = 'SelectPage'

  state = {
    selected: [],
    car2: '',
    car: 'hello',
    car3: '',
    cats: null
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
            id="car3"
            onChange={ this.handleSelectChange }
            value={ this.state.car3 }
            className="car-3-selector"
            label={ <Caption>Select with icons</Caption> }
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
              <Icon icon="ion-android-happy" /><span>Mitshubishi</span>
            </DropdownItem>
            <DropdownItem
              value="yeah"
            >
              <Icon icon="ion-android-locate" /><span>Lada</span>
            </DropdownItem>
            <DropdownItem
              value="what"
            >
              <Icon icon="ion-android-microphone-off" /><span>Opel</span>
            </DropdownItem>
            <DropdownItem
              value="where"
            >
              <Icon icon="ion-android-plane" /><span>Airbus</span>
            </DropdownItem>
          </Select>

          <br /><br />

          <Select
            id="flowers"
            onChange={ this.handleSelectChange }
            value={ this.state.flowers }
            className="flowers-selector"
            label={ <Caption>Select with images</Caption> }
          >
            <DropdownItem
              value={ null }
              disabled
            >
              Choose an option
            </DropdownItem>
            <DropdownItem
              value="suzy"
            >
              <span className="dropdown-img-wrap">
                <img src="http://lorempixel.com/30/30/cats/1" />
              </span>
              <span>
                Suzy
              </span>
            </DropdownItem>
            <DropdownItem
              value="lizy"
            >
              <span className="dropdown-img-wrap">
                <img src="http://lorempixel.com/30/30/cats/2" />
              </span>
              <span>
                Lizzy
              </span>
            </DropdownItem>
            <DropdownItem
              value="lena"
            >
              <span className="dropdown-img-wrap">
                <img src="http://lorempixel.com/30/30/cats/3" />
              </span>
              <span>
                Lena
              </span>
            </DropdownItem>
            <DropdownItem
              value="rob"
            >
              <span className="dropdown-img-wrap">
                <img src="http://lorempixel.com/30/30/cats/4" />
              </span>
              <span>
                Rob
              </span>
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
        </Card>
        <Card
          title="Multiselect"
        >
          <Multiselect
            id="dueDate"
            onChange={ this.handleMultiselectChange }
            selected={ this.state.selected }
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
