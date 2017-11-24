import React from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Tooltip from '../components/tooltip/';
import OverlayTrigger from '../components/overlay-trigger/';
import Avatar from '../components/avatar/';
import AutoPositioner from '../components/overlay-trigger/auto-positioner';

export default class TooltipPage extends React.Component {
  static displayName = 'Tooltip'
  render() {
    return (
      <div className="tooltips-page">
        <Card>
          <Row>
            <Col span={ 3 }>
              <OverlayTrigger
                overlay={
                  <Tooltip placement="top">
                    International University of Monaco
                  </Tooltip>
                }
              >
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  size="medium"
                />
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                overlay={
                  <Tooltip placement="right">
                    International University of Monaco
                  </Tooltip>
                }
              >
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  size="medium"
                />
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                overlay={
                  <Tooltip placement="bottom">
                    International University of Monaco
                  </Tooltip>
                }
              >
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  size="medium"
                />
              </OverlayTrigger>
            </Col>
            <Col span={ 3 }>
              <OverlayTrigger
                overlay={
                  <Tooltip placement="left">
                    International University of Monaco
                  </Tooltip>
                }
              >
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  size="medium"
                />
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
        <Card title="Tooltip w/ Auto Positioner - flip" className="autopositioned-tooltip">
          <Row>
            <Col span={ 6 }>
              <p>The tooltip on the right, was originally placed to the right, but because of the auto positioner it got placed to the left.</p>
            </Col>
            <Col span={ 6 }>
              <OverlayTrigger
                overlay={
                  <AutoPositioner>
                    <Tooltip placement="right">
                      International University of Monaco
                    </Tooltip>
                  </AutoPositioner>
                }
              >
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  size="medium"
                />
              </OverlayTrigger>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
