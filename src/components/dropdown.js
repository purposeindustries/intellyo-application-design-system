import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../components/icon';

export default class Dropdown extends React.Component {
  static displayName = 'Dropdown';
  static propTypes = {
    isActive: PropTypes.bool,
    isSplit: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };
  static defaultProps = {
    isSplit: true
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

  renderSplitTrigger() {
    const children = React.Children.toArray(this.props.children);
    const defaultItem = children.filter((child) => {
      return child.props.default;
    });
    return (
      <div
        className="dropdown-inner-wrap dropdown-inner-wrap--split"
      >
        <div
          className="dropdown-trigger"
          onClick={ () => defaultItem[0].props.onClick() }
        >
          <span className="dropdown-trigger-label">
            { defaultItem[0].props.children }
          </span>
        </div>
        <div
          className="dropdown-trigger-arrow-wrap"
          tabIndex="1"
          onClick={ () => this.toggle() }
          onBlur={ () => setTimeout(() => this.close(), 25) }
        >
          <Icon icon="ion-android-arrow-dropdown" />
        </div>
        <div
          className={ cx('dropdown-items', {
            'dropdown-items--open': this.state.isActive
          }) }
        >
          { children.filter((child) => !child.props.default)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="dropdown">
        { this.props.isSplit && (
          // <div className="dropdown-inner-wrap">
          //   { this.renderSplitTrigger() }
          // </div>
          <div style={ {width: '100%'} }>
            { this.renderSplitTrigger() }
          </div>
        ) }
        { !this.props.isSplit && (
          <div className="dropdown-inner-wrap">
            <div
              className="dropdown-trigger"
              tabIndex="1"
              onClick={ () => this.toggle() }
              onBlur={ () => {
                // @TODO temporary solution
                setTimeout(() => {
                  this.close();
                }, 25);
              } }
            >
              <span className="dropdown-trigger-label">
                { this.props.label }
              </span>
              <Icon icon="ion-android-arrow-dropdown" />
            </div>
            <div
              className={ cx('dropdown-items', {
                'dropdown-items--open': this.state.isActive
              }) }
            >
              { this.props.children }
            </div>
          </div>
        ) }
      </div>
    );
  }
}
