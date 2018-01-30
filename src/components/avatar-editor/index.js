import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import Button from '../button';

export default class AvatarEditor extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string,
    onChange: PropTypes.func,
    isProfileAvatar: PropTypes.bool,
  }

  static defaultProps = {
    isProfileAvatar: true,
  }

  static displayName = 'AvatarEditor'

  render() {
    return (
      <div className="avatar-editor">
        <label className="avatar-editor-label">
          { this.props.isProfileAvatar && (
            <Avatar
              src={ this.props.src }
              size="extraLarge"
              showTooltip={ false }
            />
          ) }
          { !this.props.isProfileAvatar && (
            <div
              className={ `avatar-editor-org-image-wrapper ${
                !this.props.src ? 'avatar-editor-org-image-wrapper--empty' : ''}` }
            >
              <img
                className="avatar-editor-org-image"
                src={ this.props.src }
              />
            </div>
          ) }
          <Button>{ this.props.isProfileAvatar ? 'Upload picture' : 'Upload logo' }</Button>
          <input type="file" onChange={ (e) => this.props.onChange(e.target.files[0]) } />
        </label>
      </div>
    );
  }
}