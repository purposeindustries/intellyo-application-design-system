import React from 'react';
import p from 'prop-types';
import c from 'classnames';
import Icon from '../icon';
import sticky from '../utils/sticky';

const type = Component => descriptor => descriptor.type.displayName === Component.displayName;

const Table = props => {
  const columns = React.Children.toArray(props.children).filter(type(Column));
  const s = props.sticky ? sticky() : null;

  return (
    <div className="table" ref={ s && s.container }>
      <div className="table--header" ref={ s && s.target }>
        <div className="table--row table--row--header">
          {
            columns.map(column => {
              return (
                <div
                  key={ column.props.name }
                  className={ c('table--cell', 'table--cell--header', column.props.name, {'table--cell--header--sorter': column.props.sortable}) }
                >
                  {column.props.renderHeader(column.props.label, column.props.name, column)}
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="table--rows">
        {
          props.data.map((row, index) => {
            if (row.pending) {
              return (
                <Placeholder key={ `placeholder-${index}` } columns={ columns } />
              );
            }
            return (
              <Row
                key={ index }
                item={ row }
                onClick={ (e) => props.onRowClick(e, row) }
                columns={ props.children }
              />
            );
          })
        }
      </div>
    </div>
  );
};

Table.displayName = 'Table';
Table.propTypes = {
  children: p.node,
  sticky: p.bool,
  data: p.array,
  onRowClick: p.func,
};
Table.defaultProps = {
  onRowClick: () => {},
};

const Placeholder = (props) => (
  <div className="table--row-placeholder">
    {
      props.columns.map(column => (
        <div className={ c('table--row-placeholder-cell', column.props.name) } key={ column.props.name }>
          <div className="table--row-placeholder-blob" />
          {
            column.props.complex
              ? <div className="table--row-placeholder-blob-secondary" />
              : null
          }
        </div>
      ))
    }
  </div>
);

Placeholder.displayName = 'Placeholder';
Placeholder.propTypes = {
  columns: p.array,
};

const ref = (target, prop) => el => {
  target[prop] = el;
};

class Row extends React.Component {
  static displayName = 'Row';
  static propTypes = {
    columns: p.node,
    item: p.object,
    onClick: p.func,
  };
  state = {
    expanded: false,
  };

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded,
    }, () => {
      if (this.state.expanded) {
        this._expanderContainer.style.height = this._expanderContent.clientHeight + 'px';
      } else {
        this._expanderContainer.style.removeProperty('height');
      }
    });
  }

  render() {
    const columnDescriptors = React.Children.toArray(this.props.columns);
    const columns = columnDescriptors.filter(type(Column));
    const expander = columnDescriptors.find(type(Expander));
    const row = this.props.item;

    return (
      <div
        className="table--row"
        onClick={ this.props.onClick }
      >
        {
          columns.map(column => (
            <div key={ column.props.name } className={ c('table--cell', column.props.name) }>{column.props.renderCell(row[column.props.name], row, column, this)}</div>
          ))
        }
        <div className="table--expander" ref={ ref(this, '_expanderContainer') }>
          {
            this.state.expanded
              ? <div className="table--expander-content" ref={ ref(this, '_expanderContent') }>{expander.props.render(row, this)}</div>
              : null
          }
        </div>
      </div>
    );
  }
}

const Column = () => {};
Column.defaultProps = {
  // eslint-disable-next-line react/display-name
  renderHeader: (label, name, column) => {
    if (!column.props.sortable) {
      return label;
    }
    return (
      <span>
        {label}
        <Icon
          icon="ion-ios-arrow-thin-up"
          onClick={ () => column.props.onSort(column.props.order === 'asc' ? 'desc' : 'asc') }
          className={ c('table--sorter', column.props.order === 'asc' ? 'table--sorter--asc' : 'table--sorter--desc') }
        />
      </span>
    );
  },
  renderCell: field => field,
};
Column.displayName = 'Column';

const Expander = () => {};
Expander.displayName = 'Expander';
Expander.propTypes = {
  render: p.func,
};
Expander.defaultProps = {
  // eslint-disable-next-line react/display-name
  render: row => <pre>{JSON.stringify(row, null, 2)}</pre>,
};

export {Table, Column, Expander};
