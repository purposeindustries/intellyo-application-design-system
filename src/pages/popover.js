import React from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import OverlayTrigger from '../components/overlay-trigger';
import Popover from '../components/popover';

export default class PopoverPage extends React.Component {
  static displayName = 'Popover Page'
  render() {
    return (
      <div>
        <Card>
          <Row >
            <Col span={ 3 }>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Popover>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Popover> }
              >
                Hover me!
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Popover>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Popover> }
              >
                Click me!
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
