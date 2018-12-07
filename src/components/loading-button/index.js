import React from 'react';
import Button from '../button';
import Icon from '../icon';
import PropTypes from 'prop-types';

const LoadingButton = ({ loading, onClick, size, loadingText, children, disabled, neutral, icon }) => (
  <Button
    size={ size }
    disabled={ loading || disabled }
    onClick={ onClick }
    icon={ loading ? (
      <Icon icon="ion-load-d" color="#fff" rotate={ true } />
    ) : icon }
    neutral={ neutral }
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
  disabled: PropTypes.bool,
  neutral: PropTypes.bool,
  icon: PropTypes.node
};

export default LoadingButton;
