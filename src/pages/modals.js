import React, { Component } from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Modal from '../components/modals/';
import Button from '../components/button/';
import DisplayText from '../components/display-text';

export default class ModalsPage extends Component {
  static displayName = 'ModalsPage'

  state = {
    modals: {
      animated: false,
      notAnimated: false
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
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
