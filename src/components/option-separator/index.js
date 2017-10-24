import React from 'react';
import { string } from 'prop-types';

export default function OptionSeparator(props) {
  return (
    <div className="option-separator-title">
      { props.children }
    </div>
  );
}

OptionSeparator.displayName = 'OptionSeparator';

OptionSeparator.propTypes = {
  children: string,
};
