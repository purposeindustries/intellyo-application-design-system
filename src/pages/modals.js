import React, { Component } from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Modal from '../components/modals/';
import Button from '../components/button/';
import DisplayText from '../components/display-text';
import Caption from '../components/caption/';

export default class ModalsPage extends Component {
  static displayName = 'ModalsPage'

  state = {
    modals: {
      animated: false,
      notAnimated: false,
      dialog: false,
      customDialog: false,
      modalWithScroll: false,
    }
  }

  handleModalOpen = (phrase) => {
    this.setState((state) => {
      return {
        modals: {
          ...state.modals,
          [phrase]: true
        }
      };
    });
  }

  handleModalClose = (phrase) => {
    this.setState((state) => {
      return {
        modals: {
          ...state.modals,
          [phrase]: false
        }
      };
    });
  }

  render() {
    return (
      <div className="page-modals">
        <Card>
          <Row>
            <Col span={ 12 }>
              <DisplayText>Modal without animation</DisplayText>
              <Button
                onClick={ () => this.handleModalOpen('notAnimated') }
              >
              Open modal</Button>
              <Modal
                visible={ this.state.modals.notAnimated }
                onClose={ () => this.handleModalClose('notAnimated') }
                measure="%"
                width={ 80 }
                height={ 60 }
                isAnimated={ false }
                title="Modal without animation"
              >
                <div>hello</div>
              </Modal>
              <br />
              <DisplayText>Modal with animation</DisplayText>
              <Button
                onClick={ () => this.handleModalOpen('animated') }
              >
              Open modal</Button>
              <Modal
                visible={ this.state.modals.animated }
                onClose={ () => this.handleModalClose('animated') }
                measure="%"
                width={ 80 }
                height={ 60 }
                isAnimated={ true }
                duration={ 300 }
                animation="fade"
                title="Modal with animation"
              >
                <div>hello</div>
              </Modal>
              <br />
              <DisplayText>Modal, which looks like a dialog</DisplayText>
              <Button
                onClick={ () => this.handleModalOpen('dialog') }
              >
              Open dialog</Button>
              <Modal
                visible={ this.state.modals.dialog }
                onClose={ () => this.handleModalClose('dialog') }
                measure="px"
                width={ 500 }
                height={ 162 }
                isAnimated={ true }
                duration={ 300 }
                animation="fade"
                title="Are you sure to leave it unsaved?"
                footer={ (
                  <div className="dialog-exmaple-buttons">
                    <Button neutral>Save and then leave</Button>
                    <Button danger>Leave</Button>
                  </div>
                ) }
              >
                <div>Your changes aren't going to be saved. There'll be no way to recover them.</div>
              </Modal>
              <br />
              <DisplayText>Modal, which looks like a dialog and has some custom styles</DisplayText>
              <Button
                onClick={ () => this.handleModalOpen('customDialog') }
              >
              Open dialog</Button>
              <Modal
                hasAutoHeight={ true }
                customStyles={ {'backgroundColor': 'lightblue'} }
                visible={ this.state.modals.customDialog }
                onClose={ () => this.handleModalClose('customDialog') }
                measure="px"
                width={ 500 }
                height={ 500 }
                isAnimated={ true }
                duration={ 300 }
                animation="fade"
                title="Are you sure to leave it unsaved?"
                footer={ (
                  <div className="dialog-exmaple-buttons">
                    <Button neutral>Save and then leave</Button>
                    <Button danger>Leave</Button>
                  </div>
                ) }
              >
                <div>Your changes aren't going to be saved. There'll be no way to recover them.</div>
              </Modal>
              <br />
              <DisplayText>Modal with scroll</DisplayText>
              <Button
                onClick={ () => this.handleModalOpen('modalWithScroll') }
              >
                Open modal
              </Button>
              <Modal
                visible={ this.state.modals.modalWithScroll }
                onClose={ () => this.handleModalClose('modalWithScroll') }
                measure="%"
                width={ 80 }
                height={ 60 }
                isAnimated={ false }
                hasAutoHeight={ true }
                title={ <div><DisplayText>Modal with scroll</DisplayText><Caption>Subheadline</Caption></div> }
                footer={ (
                  <div className="dialog-exmaple-buttons">
                    <Button onClick={ () => this.handleModalClose('modalWithScroll') }>Close</Button>
                  </div>
                ) }
              >
                <div>Pariatur aliquip nostrud pariatur excepteur id dolor irure nostrud nisi irure reprehenderit nostrud do. Laboris velit consequat et nisi elit dolor commodo tempor esse. Elit Lorem minim consequat labore. Eu proident ea consectetur esse officia amet non sint excepteur proident dolore magna laborum. Anim cillum pariatur consectetur cupidatat nostrud sunt dolore minim quis reprehenderit aute adipisicing. Nostrud tempor duis tempor ullamco adipisicing. Et eu aliqua sint dolore ullamco do. Amet esse commodo et laboris irure nisi Lorem voluptate. Labore aliqua reprehenderit non eu qui aute tempor ex enim proident anim eiusmod voluptate. Dolore cillum ea excepteur do Lorem. Nostrud aute enim laboris occaecat ut et nulla dolore consequat pariatur nulla in id. Ut pariatur reprehenderit deserunt excepteur quis labore mollit ex dolor labore. Velit eu laborum sint pariatur reprehenderit anim laborum aliquip aute consectetur irure aliquip dolor. Consectetur ad veniam esse voluptate labore proident cupidatat amet voluptate pariatur enim fugiat cupidatat id. Lorem qui sit eiusmod est cillum nisi tempor dolore aute labore cillum cillum occaecat. Do est laboris nulla nulla laboris voluptate excepteur duis irure. Consectetur officia tempor in adipisicing nisi culpa laborum ipsum esse. Ullamco aliquip anim laborum adipisicing proident pariatur ad elit excepteur. Ullamco eiusmod do ex dolor nisi eiusmod ipsum cupidatat sit cillum cupidatat. Officia cillum fugiat Lorem ut eiusmod. Voluptate deserunt nostrud ipsum quis amet. Proident magna dolore cillum ea velit ea eiusmod aliquip. Duis nulla ex non labore elit eu nostrud ad laboris aliqua dolore officia enim. Reprehenderit adipisicing nisi incididunt non adipisicing labore deserunt qui elit velit aliquip pariatur incididunt. Magna nulla do voluptate aliqua enim mollit dolor est. Do eiusmod est sunt do magna duis. Veniam nisi qui aliqua voluptate. Aute sunt cupidatat aute eiusmod labore. Ea ex labore deserunt veniam dolor occaecat. Dolore minim do culpa sint nisi aliqua fugiat ex aliqua cillum excepteur do anim. Eu pariatur dolore consectetur minim quis minim esse velit non culpa. Consequat esse eiusmod minim dolore officia qui nisi fugiat laboris nostrud consequat eiusmod. Veniam labore adipisicing tempor duis ex ea nisi nisi id aliquip. In aliquip et incididunt velit veniam in officia pariatur enim. Labore commodo mollit eu magna sit labore enim ipsum consequat et aliquip cupidatat anim. Officia nulla ipsum aute anim minim. Aliqua deserunt aliqua do adipisicing in fugiat nulla ut. Do cupidatat enim commodo consectetur magna. Tempor laborum laborum fugiat minim nostrud pariatur ullamco ex.</div>
                <div>Pariatur aliquip nostrud pariatur excepteur id dolor irure nostrud nisi irure reprehenderit nostrud do. Laboris velit consequat et nisi elit dolor commodo tempor esse. Elit Lorem minim consequat labore. Eu proident ea consectetur esse officia amet non sint excepteur proident dolore magna laborum. Anim cillum pariatur consectetur cupidatat nostrud sunt dolore minim quis reprehenderit aute adipisicing. Nostrud tempor duis tempor ullamco adipisicing. Et eu aliqua sint dolore ullamco do. Amet esse commodo et laboris irure nisi Lorem voluptate. Labore aliqua reprehenderit non eu qui aute tempor ex enim proident anim eiusmod voluptate. Dolore cillum ea excepteur do Lorem. Nostrud aute enim laboris occaecat ut et nulla dolore consequat pariatur nulla in id. Ut pariatur reprehenderit deserunt excepteur quis labore mollit ex dolor labore. Velit eu laborum sint pariatur reprehenderit anim laborum aliquip aute consectetur irure aliquip dolor. Consectetur ad veniam esse voluptate labore proident cupidatat amet voluptate pariatur enim fugiat cupidatat id. Lorem qui sit eiusmod est cillum nisi tempor dolore aute labore cillum cillum occaecat. Do est laboris nulla nulla laboris voluptate excepteur duis irure. Consectetur officia tempor in adipisicing nisi culpa laborum ipsum esse. Ullamco aliquip anim laborum adipisicing proident pariatur ad elit excepteur. Ullamco eiusmod do ex dolor nisi eiusmod ipsum cupidatat sit cillum cupidatat. Officia cillum fugiat Lorem ut eiusmod. Voluptate deserunt nostrud ipsum quis amet. Proident magna dolore cillum ea velit ea eiusmod aliquip. Duis nulla ex non labore elit eu nostrud ad laboris aliqua dolore officia enim. Reprehenderit adipisicing nisi incididunt non adipisicing labore deserunt qui elit velit aliquip pariatur incididunt. Magna nulla do voluptate aliqua enim mollit dolor est. Do eiusmod est sunt do magna duis. Veniam nisi qui aliqua voluptate. Aute sunt cupidatat aute eiusmod labore. Ea ex labore deserunt veniam dolor occaecat. Dolore minim do culpa sint nisi aliqua fugiat ex aliqua cillum excepteur do anim. Eu pariatur dolore consectetur minim quis minim esse velit non culpa. Consequat esse eiusmod minim dolore officia qui nisi fugiat laboris nostrud consequat eiusmod. Veniam labore adipisicing tempor duis ex ea nisi nisi id aliquip. In aliquip et incididunt velit veniam in officia pariatur enim. Labore commodo mollit eu magna sit labore enim ipsum consequat et aliquip cupidatat anim. Officia nulla ipsum aute anim minim. Aliqua deserunt aliqua do adipisicing in fugiat nulla ut. Do cupidatat enim commodo consectetur magna. Tempor laborum laborum fugiat minim nostrud pariatur ullamco ex.</div>
              </Modal>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
