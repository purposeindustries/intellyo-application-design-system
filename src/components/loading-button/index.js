import React from 'react';
import Button from '../button';
import Icon from '../icon';
import PropTypes from 'prop-types';

const LoadingButton = ({ loading, onClick, size }) => (
  <Button
    size={ size }
    disabled={ loading }
    onClick={ onClick }
    icon={ loading ? (
      <span className="button-icon-wrapper">
        <Icon icon="ion-load-d" color="#fff" rotate={ true } />
      </span>
    ) : null }
  >
    { loading ? 'Loading...' : 'Save' }
  </Button>
);

LoadingButton.displayName = 'LoadingButton';
LoadingButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
};

export default LoadingButton;
