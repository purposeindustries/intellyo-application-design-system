import React, { Component } from 'react';
import DisplayText from '../components/display-text/';
import Avatar from '../components/avatar/';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import StackedAvatar from '../components/stacked-avatar/';
import Icon from '../components/icon/';
import AvatarEditor from '../components/avatar-editor';

export default class Avatars extends Component {
  displayName = 'Avatars'

  state = {
    imageSrc: ''
  }

  handleImageChange = (file) => {
    if (!file) {
      return;
    }
    const src = window.URL.createObjectURL(file);

    this.setState({ imageSrc: src });
  }

  render() {
    return (
      <div>
        <DisplayText>Avatars</DisplayText>
        <div className="avatars-page">
          <Card>
            <Row>
              <Col span={ 6 }>
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
                    name=""
                  />
                  <Avatar
                    name="Donald Trump"
                    size="extraLarge"
                  />
                </div>
                <div className="avatar-wrapper">
                  <Avatar
                    name="Donald Trump"
                    size="small"
                    showTooltip={ false }
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
                  <Avatar
                    name="Donald Trump"
                    size="extraLarge"
                    src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  />
                </div>
                <div className="avatar-wrapper">
                  <StackedAvatar
                    avatars={ [
                      {
                        name: 'Donald Trump',
                        src: 'http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg',
                      },
                      {
                        name: 'Ivanka Trump',
                        src: 'https://images.britcdn.com/wp-content/uploads/2016/08/Ivanka-Trump-_-a-_-featured.jpg',
                      },
                      {
                        name: 'Melinia Trump',
                        src: 'https://ae01.alicdn.com/kf/HTB17nUYPpXXXXc8XVXXq6xXFXXX5/Modny-Melania-font-b-Trump-b-font-Celebrity-font-b-Dress-b-font-O-Szyi-Kolano.jpg',
                      },
                      {
                        name: 'Melinia Trump'
                      },
                      {
                        name: 'Melinia Trump'
                      }
                    ] }
                  />
                </div>
              </Col>
              <Col span={ 6 }>
                <Avatar
                  name="Donald Trump"
                  caption="President of the United States"
                />
                <Avatar
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  icon={ (
                    <Icon icon="ion-ios-location" />
                  ) }
                  caption="Washington DC"
                />
              </Col>
            </Row>
          </Card>
          <Card title="Avatar editor" className="card-avatar-editor">
            <AvatarEditor
              src={ this.state.imageSrc }
              onChange={ this.handleImageChange }
            />
            <AvatarEditor
              src={ this.state.imageSrc }
              isProfileAvatar={ false }
              onChange={ this.handleImageChange }
              buttonLabel="Upload logo"
            />
          </Card>
        </div>
      </div>
    );
  }
}
