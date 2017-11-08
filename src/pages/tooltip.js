import React from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Tooltip from '../components/tooltip/';
import OverlayTrigger from '../components/overlay-trigger/';
import Avatar from '../components/avatar/';

export default class TooltipPage extends React.Component {
  static displayName = 'Tooltip'
  render() {
    return (
      <div>
        <Card>
          <Row >
            <Col span={ 3 }>
              <Tooltip placement="top">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip placement="right">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip placement="bottom">
                International University of Monaco
              </Tooltip>
            </Col>
            <Col span={ 3 }>
              <Tooltip placement="left">
                International University of Monaco
              </Tooltip>
            </Col>
          </Row>
        </Card>
        <Card>
          <Row>
            <Col span={ 3 }>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>
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
                placement="bottom"
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
                placement="left"
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
            <Col span={ 3 }>
              <OverlayTrigger
                placement="right"
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
          </Row>
        </Card>
      </div>
    );
  }
}
