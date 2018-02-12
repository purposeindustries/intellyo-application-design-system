import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

export default class AvatarEditor extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string,
    onChange: PropTypes.func,
    isProfileAvatar: PropTypes.bool,
    buttonLabel: PropTypes.node,
    borderRadius: PropTypes.string,
    placeholder: PropTypes.node,
  }

  static defaultProps = {
    isProfileAvatar: true,
    buttonLabel: 'Upload picture',
    borderRadius: '4px',
  }

  static displayName = 'AvatarEditor'

  getBorderRadius = () => {
    if (typeof this.props.borderRadius === 'string') {
      return { borderRadius: `${this.props.borderRadius}` };
    }
    if (typeof this.props.borderRadius === 'number') {
      return { borderRadius: `${this.props.borderRadius}%` };
    }
  }

  render() {
    return (
      <div className="avatar-editor">
        <label className="avatar-editor-label">
          <div
            className={ `avatar-editor-org-image-wrapper ${
              (!this.props.src && !this.props.placeholder) ? 'avatar-editor-org-image-wrapper--empty' : ''}` }
            style={ this.getBorderRadius() }
          >
            <img
              className="avatar-editor-org-image"
              src={ this.props.src || this.props.placeholder }
            />
          </div>
          <Button>{ this.props.buttonLabel }</Button>
          <input type="file" onChange={ (e) => this.props.onChange(e.target.files[0]) } />
        </label>
      </div>
    );
  }
}
