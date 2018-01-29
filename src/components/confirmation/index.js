import React from 'react';
import PropTypes from 'prop-types';

class Confirmation extends React.Component {
  state = { confirming: false };

  setConfirm = () => this.setState({ confirming: true });

  handleConfirm = () => {
    this.props.onConfirm();
    this.setState({ confirming: false });
  }

  handleCancel = () => {
    this.setState({ confirming: false });
  }

  render() {
    const { children } = this.props;
    const { confirming } = this.state;

    return children({
      setConfirm: this.setConfirm,
      handleCancel: this.handleCancel,
      handleConfirm: this.handleConfirm,
      confirming
    });
  }
}

Confirmation.propTypes = {
  children: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

Confirmation.displayName = 'Confirmation';

export default Confirmation;
