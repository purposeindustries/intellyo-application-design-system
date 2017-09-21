import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ref = (target, prop) => el => {
  target[prop] = el;
};

const toHTML = str => str.replace(/https?:\/\/(\S*)/g, match => `<a href='${match}'>${match}</a>`).replace(/\n/g, '<br />');

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
    onBlur={ props.onBlur }
    onFocus={ props.onFocus }
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
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
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
        <div className="autogrow--measurer">
          <Component
            { ...this.props }
            inputRef={ store }
            className={ classNames('autogrow', 'autogrow--measured', this.props.className) }
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

class RichTextarea extends React.Component {
  static displayName = 'RichTextarea';
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    transform: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
  };
  static defaultProps = {
    transform: toHTML,
  };

  onUpdate = () => {
    this.props.onChange({
      target: {
        value: this._el.innerText,
        name: this.props.name,
      },
    });
  };

  shouldComponentUpdate(props) {
    // prevent updates while the div is edited
    return props.value !== this._el.innerText;
  }

  render() {
    const value = {
      __html: this.props.transform(this.props.value),
    };

    // i know what i'm doing
    /* eslint-disable react/no-danger */
    return (
      <div
        contentEditable
        placeholder={ this.props.placeholder }
        ref={ ref(this, '_el') }
        className={ classNames('rich-textarea', this.props.className) }
        dangerouslySetInnerHTML={ value }
        onInput={ this.onUpdate }
        onFocus={ this.props.onFocus }
        onBlur={ e => {
          this.forceUpdate();
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        } }
        onPaste={ e => {
          e.preventDefault();
          // only plain text is allowed
          const text = e.clipboardData.getData('text/plain');
          document.execCommand('insertHTML', false, text.trim());
        } }
        onMouseDown={ e => {
          // open links with left/middle mouse button
          if (e.button < 2 && e.target.tagName === 'A') {
            window.open(e.target.href, '_blank');
          }
        } }
      />
    );
    /* eslint-enable react/no-danger */
  }
}

export default Textarea;
export {RichTextarea, InvisibleTextarea, autogrow};
