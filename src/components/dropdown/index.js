import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';

export default class Dropdown extends React.Component {
  static displayName = 'Dropdown';
  static propTypes = {
    isActive: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.element
  };
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive
    };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.isActive !== 'undefined' && nextProps.isActive !== this.state.isActive) {
      this.setState({
        isActive: nextProps.isActive
      });
    }
  }

  open() {
    this.setState({
      isActive: true
    });
  }

  toggle() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  close() {
    this.setState({
      isActive: false
    });
  }

  renderSplitTrigger(isSplit) {
    const children = React.Children.toArray(this.props.children);
    const defaultItem = children.filter((child) => {
      return child.props.default;
    })[0];
    const renderOtherChildren = () => {
      const otherChildren = children.filter((child) => !child.props.default);
      return React.Children.map(otherChildren, (c) => {
        return React.cloneElement(c, {
          onClick: () => {
            if (c.props.onClick) {
              c.props.onClick();
            }
            this.close();
          }
        });
      });
    };
    return this.checkChildrenCount(isSplit, defaultItem, renderOtherChildren);
  }

  checkChildrenCount(isSplit, defaultItem, renderOtherChildren) {
    if (isSplit) {
      if (React.Children.count(this.props.children) === 1) {
        return (
          <div
            className="dropdown-wrap dropdown-wrap--split"
            style={ this.props.style }
          >
            <div
              className="dropdown-trigger dropdown-trigger--only-child"
              onClick={ defaultItem.props.onClick }
            >
              <span className="dropdown-trigger-label">
                { defaultItem.props.children }
              </span>
            </div>
          </div>
        );
      }
      return (
        <div
          className="dropdown-wrap dropdown-wrap--split"
          style={ this.props.style }
        >
          <div
            className="dropdown-trigger"
            onClick={ defaultItem.props.onClick }
          >
            <span className="dropdown-trigger-label">
              { defaultItem.props.children }
            </span>
          </div>
          <div
            className="dropdown-trigger-arrow-wrap"
            tabIndex="1"
            onClick={ () => this.toggle() }
          >
            {
              this.props.icon ?
                this.props.icon :
                (<Icon icon="ion-android-arrow-dropdown" />)
            }
          </div>
          <div
            className={ cx('dropdown-items', {
              'dropdown-items--open': this.state.isActive
            }) }
          >
            { renderOtherChildren() }
          </div>
        </div>
      );
    }

    if (React.Children.count(this.props.children) === 1) {
      return (
        <div
          className="dropdown-trigger dropdown-trigger--only-child"
          tabIndex="1"
        >
          <span className="dropdown-trigger-label">
            { this.props.label }
          </span>
        </div>
      );
    }
    return (
      <div className="dropdown-inner-wrap">
        <div
          className="dropdown-trigger"
          tabIndex="1"
          onClick={ () => this.toggle() }
        >
          <span className="dropdown-trigger-label">
            { this.props.label }
          </span>
          {
            this.props.icon ?
              this.props.icon :
              (<Icon icon="ion-android-arrow-dropdown" />)
          }
        </div>
        <div
          className="dropdown-items"
        >
          { this.props.children }
        </div>
      </div>
    );
  }

  render() {
    const children = React.Children.toArray(this.props.children);
    const isSplit = children.filter((child) => child.props.default).length > 0;
    return (
      <div
        className={ cx('dropdown', this.props.className, {
          'dropdown--open': this.state.isActive
        }) }
        style={ this.props.style }
      >
        <div
          className="dropdown-overlay-background"
          onClick={ () => {
            this.close();
          } }
        />
        { isSplit && (
          <div>
            { this.renderSplitTrigger(isSplit) }
          </div>
        ) }
        { !isSplit && (
          <div className="dropdown-wrap">
            { this.checkChildrenCount(isSplit) }
          </div>
        ) }
      </div>
    );
  }
}
