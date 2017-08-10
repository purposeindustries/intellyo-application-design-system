import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Button from '../components/button';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';
import MultiActionButton from '../components/multi-action-button';

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
            <Row>
              <Col span={ 3 }>
                <MultiActionButton />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
