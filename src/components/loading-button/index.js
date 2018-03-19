import React from 'react';
import Button from '../button';
import Icon from '../icon';
import PropTypes from 'prop-types';

const LoadingButton = ({ loading, onClick, size, loadingText, children }) => (
  <Button
    size={ size }
    disabled={ loading }
    onClick={ onClick }
    icon={ loading ? (
      <Icon icon="ion-load-d" color="#fff" rotate={ true } />
    ) : null }
  >
    { loading ? loadingText : children }
  </Button>
);

LoadingButton.displayName = 'LoadingButton';
LoadingButton.defaultProps = {
  children: 'Save',
  loadingText: 'Loading...'
};
LoadingButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  loadingText: PropTypes.node,
  children: PropTypes.node,
};

export default LoadingButton;
