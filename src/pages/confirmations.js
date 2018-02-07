import React from 'react';
import DisplayText from '../components/display-text/';
import Card from '../components/card/';
import Confirmation from '../components/confirmation/';
import Button from '../components/button/';
import Modal from '../components/modals/';

export default class Confirmations extends React.Component {

  displayName = 'Confirmations';

  render() {
    return (
      <div>
        <DisplayText>Confirmation</DisplayText>
        <div className="confirmations-page">
          <Card>
            <Confirmation onConfirm={ () => console.log('deleted') }>
              {({ confirming, setConfirm, handleCancel, handleConfirm }) => {
                return (
                  <div>
                    <Button onClick={ setConfirm }>
                      Delete
                    </Button>
                    <Modal
                      visible={ confirming }
                      onClose={ handleCancel }
                      measure="px"
                      width={ 300 }
                      height={ 150 }
                      isAnimated={ false }
                      title="Delete confirmation"
                    >
                      <div>Are you sure you wanna delete?</div>
                      <div className="modal-button-wrap">
                        <Button neutral={ true } onClick={ handleCancel }>Cancel</Button>
                        <Button onClick={ handleConfirm }>Yes, delete</Button>
                      </div>
                    </Modal>
                  </div>
                );
              }}
            </Confirmation>
          </Card>
        </div>
      </div>
    );
  }
}
