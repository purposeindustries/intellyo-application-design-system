import React from 'react';
import Card from '../components/card';
import Tooltip from '../components/tooltip';

export default class TooltipPage extends React.Component {
  static displayName = 'Tooltip'
  render() {
    return (
      <div>
        <Card>
          <Tooltip>
            International University of Monaco
          </Tooltip>
        </Card>
      </div>
    );
  }
}
