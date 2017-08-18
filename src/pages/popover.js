import React from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import OverlayTrigger from '../components/overlay-trigger';

export default class PopoverPage extends React.Component {
  static displayName = 'Popover Page'
  render() {
    return (
      <div>
        <Card>
          <Row >
            <Col span={ 3 }>
              <OverlayTrigger></OverlayTrigger>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
