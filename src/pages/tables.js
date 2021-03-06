import React from 'react';
import DisplayText from '../components/display-text';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';
import {Table, Column, Expander} from '../components/table';
import c from 'classnames';
import InfiniteTable from '../components/table/infinite-loading-table';
import FakeFetch from '../utils/fake-fetch';
import data from '../utils/dummy-text.js';

// eslint-disable-next-line react/display-name
const toggleExpander = (prop, item, column, instance) => (
  <Icon
    icon="ion-arrow-right-b" className={ c('table--expander-button', {
      'table--expander-button--expanded': instance.state.expanded,
    }) } onClick={ () => instance.toggleExpand() }
  />
);

const renderExpander = item => item.description;

export default class Tables extends React.Component {
  static displayName = 'TablesPage';

  state = {
    idOrder: 'asc',
  };

  render() {
    const sort = () => {
      this.setState({
        idOrder: this.state.idOrder === 'asc' ? 'desc' : 'asc',
      });
    };

    const sortedData = data.slice(0, 10).sort((a, b) => {
      if (this.state.idOrder === 'asc') {
        return a.id - b.id;
      }
      return b.id - a.id;
    });

    return (
      <div className="page-tables">
        <DisplayText>Tables</DisplayText>
        <div className="buttons-page">
          <Card>
            <Row>
              <Col span={ 6 }>
                <DisplayText>Regular table</DisplayText>
                <Table data={ data.slice(0, 10) }>
                  <Column name="id" label="ID" />
                  <Column name="title" label="Title" />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                </Table>
              </Col>
              <Col span={ 6 }>
                <DisplayText>Table with sticky header &amp; expander</DisplayText>
                <Table data={ data.slice(0, 10) } sticky>
                  <Column name="expander" label="" renderCell={ toggleExpander } />
                  <Column name="id" label="ID" />
                  <Column name="title" label="Title" />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                  <Expander render={ renderExpander } />
                </Table>
              </Col>
            </Row>
            <Row>
              <Col span={ 12 }>
                <DisplayText>Sortable columns</DisplayText>
                <Table data={ sortedData }>
                  <Column
                    name="id"
                    label="ID"
                    sortable
                    order={ this.state.idOrder }
                    onSort={ sort }
                  />
                  <Column name="title" label="Title" />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                </Table>
              </Col>
            </Row>
            <Row>
              <Col span={ 12 }>
                <FakeFetch url={ `https://example.com?page=${this.state.currentPage}` }>
                  { ({ isLoading, data }) => (
                    <InfiniteTable
                      data={ data }
                      isLoading={ isLoading }
                      isExhausted={ this.state.currentPage > 2 }
                      onPaginate={ (currentPage) => {
                        this.setState({
                          currentPage
                        });
                      } }
                    >
                      <Column name="id" label="ID" />
                      <Column name="title" label="Title" complex />
                      <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                    </InfiniteTable>
                  ) }
                </FakeFetch>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
