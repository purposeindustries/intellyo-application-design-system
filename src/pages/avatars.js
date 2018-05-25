import React, { Component } from 'react';
import DisplayText from '../components/display-text/';
import Avatar from '../components/avatar/';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import StackedAvatar from '../components/stacked-avatar/';
import AvatarCard from '../components/avatar-card/';
import Icon from '../components/icon/';
import AvatarEditor from '../components/avatar-editor';

export default class Avatars extends Component {
  displayName = 'Avatars'

  state = {
    profileImageSrc: '',
    logoImageSrc: ''
  }

  handleImageChange = (file, field) => {
    if (!file) {
      return;
    }
    const src = window.URL.createObjectURL(file);

    this.setState({
      [field]: src
    });
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
                <AvatarCard
                  name="Donald Trump"
                />
                <AvatarCard
                  name="Donald Trump"
                  src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                  icon={ (
                    <Icon icon="ion-ios-location" />
                  ) }
                  caption="Washington DC"
                />
                <AvatarCard
                  name="👈 👈 👈 🤩"
                  caption="Shh, but it's custom."
                  renderAvatar={ (/* avatarProps */) => (
                    <div
                      style={ {
                        borderRadius: '100%',
                        overflow: 'hidden'
                      } }
                    >
                      <img
                        src="https://dummyimage.com/60x60/000000/00ff00.png&text=Custom"
                        style={ { display: 'block' } }
                      />
                    </div>
                  ) }
                />
                <AvatarCard
                  name="Cannot be loaded"
                  caption="Fallback"
                  src="http://this.is.not.a.real.page"
                />
              </Col>
            </Row>
          </Card>
          <Card title="Avatar editor" className="card-avatar-editor">
            <AvatarEditor
              src={ this.state.logoImageSrc }
              onChange={ (file) => this.handleImageChange(file, 'logoImageSrc') }
            />
            <AvatarEditor
              src={ this.state.profileImageSrc }
              isProfileAvatar={ false }
              onChange={ (file) => this.handleImageChange(file, 'profileImageSrc') }
            />
          </Card>
        </div>
      </div>
    );
  }
}
