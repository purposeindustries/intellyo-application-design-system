import React from 'react';
import c from 'classnames';

const type = Component => descriptor => descriptor.type.displayName === Component.displayName;

const Table = props => {
  const columns = React.Children.toArray(props.children).filter(type(Column));

  return (
    <div className='table'>
      <div className='table--header'>
        <div className='table--row table--row--header'>
          {
            columns.map(column => {
              return (
                <div key={column.props.name} className={c('table--cell', 'table--cell--header', column.props.name)}>{column.props.renderHeader(column.props.label, column.props.name, column)}</div>
              );
            })
          }
        </div>
      </div>
      <div className='table--rows'>
        {
          props.data.map((row, index) => <Row key={index} item={row} columns={props.children} />)
        }
      </div>
    </div>
  );
};

class Row extends React.Component {
  state = {
    expanded: false,
  };

  toggleExpand() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    const columnDescriptors = React.Children.toArray(this.props.columns);
    const columns = columnDescriptors.filter(type(Column));
    const expander = columnDescriptors.find(type(Expander))
    const row = this.props.item;

    return (
      <div className='table--row'>
        {
          columns.map(column => (
            <div key={column.props.name} className={c('table--cell', column.props.name)}>{column.props.renderCell(row[column.props.name], row, column, this)}</div>
          ))
        }
        {
          this.state.expanded
            ? <div className='table--expander'>{expander.props.render(row, this)}</div>
            : null
        }
      </div>
    )
  }
}

const Column = () => {};
Column.defaultProps = {
  renderHeader: label => label,
  renderCell: field => field,
};
Column.displayName = 'Column';

const Expander = () => {};
Expander.defaultProps = {
  render: row => <pre>{JSON.stringify(row, null, 2)}</pre>,
};
Expander.displayName = 'Expander';

export {Table, Column, Expander};
