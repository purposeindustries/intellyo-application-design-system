import React, { Component } from 'react';
import DisplayText from '../components/display-text/';
import ButtonGroup from '../components/button-group/';
import Button from '../components/button/';
import LoadingButton from '../components/loading-button/';
import Dropdown from '../components/dropdown/';
import DropdownItem from '../components/dropdown-item/';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Icon from '../components/icon/';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default class Buttons extends Component {
  displayName = 'ButtonsPage'
  state = {
    loading: false,
  };

  render() {
    return (
      <div>
        <DisplayText>Buttons</DisplayText>
        <div className="buttons-page">
          <Card>
            <Row>
              <Col span={ 3 }>
                <Button size="large">
                  Click me!
                </Button>
                <Button danger size="large">
                  Warning!
                </Button>
                <Button neutral size="large">
                  I agree
                </Button>
                <Button
                  size="large"
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                >
                  Add to cart
                </Button>
                <Button
                  danger
                  size="large"
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                >
                  Remove this item
                </Button>
                <Button
                  disabled
                  danger
                  size="large"
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                >
                  Remove this item
                </Button>
                <Button
                  neutral
                  size="large"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  neutral
                  disabled
                  size="large"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  size="large"
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                />
                <Button
                  danger
                  size="large"
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                />
                <Button
                  neutral
                  size="large"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                />
              </Col>
              <Col span={ 3 }>
                <Button>
                  Click me!
                </Button>
                <Button danger>
                  Warning!
                </Button>
                <Button neutral>
                  I agree
                </Button>
                <Button
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                >
                  Add to cart
                </Button>
                <Button
                  danger
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                >
                  Remove this item
                </Button>
                <Button
                  neutral
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  disabled
                  neutral
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                />
                <Button
                  danger
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                />
                <Button
                  neutral
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                />
              </Col>
              <Col span={ 3 }>
                <Button size="small">
                  Click me!
                </Button>
                <Button danger size="small">
                  Warning!
                </Button>
                <Button neutral size="small">
                  I agree
                </Button>
                <Button
                  size="small"
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                >
                  Add to cart
                </Button>
                <Button
                  danger
                  size="small"
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                >
                  Remove this item
                </Button>
                <Button
                  neutral
                  size="small"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  disabled
                  neutral
                  size="small"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                >
                  I'm happy
                </Button>
                <Button
                  size="small"
                  icon={ (
                    <Icon icon="ion-android-cart" />
                  ) }
                />
                <Button
                  danger
                  size="small"
                  icon={ (
                    <Icon icon="ion-close-circled" />
                  ) }
                />
                <Button
                  neutral
                  size="small"
                  icon={ (
                    <Icon icon="ion-happy" />
                  ) }
                />
              </Col>
            </Row>
          </Card>
        </div>
        <DisplayText>Dropdown</DisplayText>
        <div className="dropdown-page">
          <Card>
            <Row>
              <Col span={ 12 }>
                <div className="dropdowns">
                  <Dropdown
                    label="Foobar"
                    isActive={ false }
                  >
                    <DropdownItem>
                      Hello
                    </DropdownItem>
                    <DropdownItem default>
                      yeah
                    </DropdownItem>
                    <DropdownItem>
                      hi
                    </DropdownItem>
                  </Dropdown>
                  <Dropdown
                    label="Foobar"
                    isActive={ false }
                  >
                    <DropdownItem>
                      Home Page
                    </DropdownItem>
                    <DropdownItem
                      default
                      icon={ (<Icon icon="ion-eye" />) }
                    >
                      Preview
                    </DropdownItem>
                    <DropdownItem>
                      Category Page
                    </DropdownItem>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="button-group-page">
          <DisplayText>Button Group</DisplayText>
          <Card>
            <Row>
              <Col span={ 12 }>
                <ButtonGroup>
                  <Button neutral>7-DAY</Button>
                  <Button neutral active>30-DAY</Button>
                  <Button neutral>90-DAY</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Card>
        </div>
        <DisplayText>Loading Button</DisplayText>
        <Card>
          <Row>
            <Col span={ 12 }>
              <LoadingButton
                loading={ this.state.loading }
                onClick={ async () => {
                  this.setState({loading: true});
                  await sleep(7000);
                  this.setState({loading: false});
                } }
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
