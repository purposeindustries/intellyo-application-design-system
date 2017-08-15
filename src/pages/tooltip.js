import React from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Tooltip from '../components/tooltip';

export default class TooltipPage extends React.Component {
  static displayName = 'Tooltip'
  render() {
    return (
      <div>
        <Card>
          <Row >
            <Col span={ 3 }>
              <Tooltip classname="tooltip-caret-top">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip classname="tooltip-caret-right">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip classname="tooltip-caret-bottom">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip classname="tooltip-caret-left">
                International University of Monaco
              </Tooltip>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
