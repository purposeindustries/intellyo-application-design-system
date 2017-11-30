import React from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import OverlayTrigger from '../components/overlay-trigger/';
import Popover from '../components/popover/';

export default class PopoverPage extends React.Component {
  static displayName = 'Popover Page'
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Col span={ 3 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <Popover placement="right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Popover>
                }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                trigger="click"
                delay={ 0 }
                overlay={
                  <Popover placement="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Popover>
                  }
              >
                Click me!
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <Popover placement="top">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Popover>
                }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <Popover placement="bottom">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Popover>
                }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
