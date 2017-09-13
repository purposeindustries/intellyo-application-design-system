import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Textarea = (props) => (
  <textarea
    name={ props.name }
    className={ classNames('textarea', props.className, {
      'textarea--disabled': props.disabled
    }) }
    onChange={ props.onChange }
    placeholder={ props.placeholder }
    disabled={ props.disabled }
    value={ props.value }
    defaultValue={ props.defaultValue }
    ref={ props.inputRef }
    style={ props.style }
  />
);

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  inputRef: PropTypes.func,
  style: PropTypes.object,
};

const InvisibleTextarea = props => (
  <Textarea { ...props } className={ classNames('textarea--invisible', props.className) } />
);

InvisibleTextarea.propTypes = Textarea.propTypes;
InvisibleTextarea.displayName = 'InvisibleTextarea';

const autogrow = Component => class AutogrowingComponent extends React.Component {
  static displayName = 'Autogrow';
  static propTypes = Textarea.propTypes;
  state = {
    height: null,
  };

  adjustHeight(nextFrame) {
    const adjust = () => {
      if (this.state.height === (this._el && this._el.scrollHeight)) {
        return;
      }
      this.setState({
        height: this._el && this._el.scrollHeight,
      });
    };

    if (nextFrame) {
      setTimeout(adjust, 0);
    } else {
      adjust();
    }
  }

  componentDidUpdate() {
    this.adjustHeight();
  }

  render() {
    const store = el => {
      this._el = el;
      this.adjustHeight(true);
    };
    return (
      <div className="autogrow" style={ this.state.height ? { height: this.state.height + 'px' } : null }>
        <div className="autogrow--measurer-container">
          <Component
            { ...this.props }
            inputRef={ store }
            className={ classNames('autogrow', this.props.className) }
            style={ { height: '0px' } }
          />
        </div>
        <Component
          { ...this.props }
          className={ classNames('autogrow', this.props.className) }
        />
      </div>
    );
  }
};

export default Textarea;
export {InvisibleTextarea, autogrow};
