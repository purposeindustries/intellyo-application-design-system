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
              <Tooltip>
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip>
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip>
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip>
                International University of Monaco
              </Tooltip>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
