import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Avatar from '../components/avatar';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
// import Icon from '../components/icon';

export default class Avatars extends Component {
  displayName = 'Avatars'
  render() {
    return (
      <div>
        <DisplayText>Avatars</DisplayText>
        <div className="avatars-page">
          <Card>
            <Row>
              <Col span={ 3 }>
                <div className="avatar-wrapper">
                  <Avatar
                    name="Donald Trump"
                    size="small"
                  />
                  <Avatar
                    name="Donald Trump"
                    size="medium"
                  />
                  <Avatar
                    name="Donald Trump"
                  />
                </div>
                <div className="avatar-wrapper">
                  <Avatar
                    name="Donald Trump"
                    size="small"
                    src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  />
                  <Avatar
                    name="Donald Trump"
                    src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                    size="medium"
                  />
                  <Avatar
                    name="Donald Trump"
                    src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  />
                </div>
              </Col>
              <Col span={ 3 }>
                there
              </Col>
              <Col span={ 3 }>
                World!
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
