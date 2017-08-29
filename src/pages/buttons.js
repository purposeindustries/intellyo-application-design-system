import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Button from '../components/button/';
import LoadingButton from '../components/loading-button';
import Dropdown from '../components/dropdown';
import DropdownItem from '../components/dropdown-item';
import Card from '../components/card/';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';
import root from 'window-or-global';

export default class Buttons extends Component {
  displayName = 'ButtonsPage'
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
                  neutral
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
              </Col>
            </Row>
          </Card>
        </div>
        <DisplayText>Loading Button</DisplayText>
        <Card>
          <Row>
            <Col span={ 12 }>
              <LoadingButton
                onClick={ () => new root.Promise((resolve) => {
                  setTimeout(resolve, 3000);
                }) }
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
