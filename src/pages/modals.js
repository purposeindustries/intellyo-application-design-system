import React, { Component } from 'react';
import Card from '../components/card/';
import Row from '../components/row/';
import Col from '../components/col/';
import Modal from '../components/modals/';
import Button from '../components/button/';

export default class ModalsPage extends Component {
  static displayName = 'ModalsPage'

  state = {
    modalVisible: false
  }

  handleModalOpen = () => {
    this.setState({
      modalVisible: true
    });
  }

  handleModalClose = () => {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <div className="page-modals">
        <Card>
          <Row>
            <Col span={ 12 }>
              <Button
                onClick={ this.handleModalOpen }
              >
              Open modal</Button>
              <Modal
                visible={ this.state.modalVisible }
                onClose={ this.handleModalClose }
                measure="%"
                width={ 80 }
                height={ 60 }
                isAnimated={ false }
                title="Hey you"
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
