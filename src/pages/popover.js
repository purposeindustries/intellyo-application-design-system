import React from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import OverlayTrigger from '../components/overlay-trigger/';
import Popover from '../components/popover/';
import AutoPositioner from '../components/overlay-trigger/auto-positioner';

export default class PopoverPage extends React.Component {
  static displayName = 'Popover Page'
  render() {
    return (
      <div className="popovers-page">
        <Card>
          <Row >
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
        <Card
          title="Popover w/ Auto Positioner - flip"
          className="auto-positioner-card"
        >
          <Row>
            <Col span={ 6 }>
              <p>This popover (on the right) is origanally placed to the right, but positioned to the left, because it wouldn't have fit the viewport.</p>
            </Col>
            <Col span={ 6 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <AutoPositioner>
                    <Popover placement="right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Popover>
                  </AutoPositioner>
                }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
        <Card
          title="Popover w/ Auto Positioner - push"
          className="auto-positioner-card"
        >
          <Row>
            <Col span={ 6 }>
              <p>This popover (on the right) is placed to the top, but it would slip out of the view if it weren't wrapped in an AutoPositioner wrapper. AutoPositioner pushes it back to the viewport.</p>
            </Col>
            <Col span={ 6 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <AutoPositioner behaviour="push">
                    <Popover placement="bottom">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Popover>
                  </AutoPositioner>
                }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
        <Card
          title="Popover w/ Auto Positioner - push"
          className="auto-positioner-card"
        >
          <Row>
            <Col span={ 6 }>
              <p>This popover (on the right) is placed to the top, but it would slip out of the view if it weren't wrapped in an AutoPositioner wrapper. AutoPositioner pushes it back to the viewport.</p>
            </Col>
            <Col span={ 6 }>
              <OverlayTrigger
                delay={ 0 }
                overlay={
                  <AutoPositioner behaviour="push">
                    <Popover placement="top">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Popover>
                  </AutoPositioner>
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
