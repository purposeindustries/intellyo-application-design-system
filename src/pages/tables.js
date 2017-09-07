import React from 'react';
import DisplayText from '../components/display-text';
import Button from '../components/button';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';
import {Table, Column, Expander} from '../components/table';
import lipsum from 'lorem-ipsum';
import c from 'classnames';

const data = [];
let i;
for (i = 0; i < 30; i++) {
  data.push({
    id: i + 1,
    title: lipsum({count: 1, units: 'sentences'}),
    description: lipsum({count: 2, units: 'paragraphs'}),
    tags: Array(Math.floor(Math.random() * 5)).join(0).split(0).map(() => lipsum({count: 1, units: 'words'})),
  });
}

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
    loading: false,
  };

  render() {
    const reload = () => {
      this.setState({loading: true});
      setTimeout(() => {
        this.setState({loading: false});
      }, 2000);
    };

    return (
      <div>
        <DisplayText>Buttons</DisplayText>
        <div className="buttons-page">
          <Card>
            <Row>
              <Col span={ 12 }>
                <DisplayText>Regular table</DisplayText>
                <Table data={ data.slice(0, 10) }>
                  <Column name="id" label="ID" />
                  <Column name="title" label="Title" />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                </Table>
              </Col>
              <Col span={ 12 }>
                <DisplayText>Table with sticky header &amp; expander</DisplayText>
                <Table data={ data.slice() } sticky>
                  <Column name="expander" label="" renderCell={ toggleExpander } />
                  <Column name="id" label="ID" />
                  <Column name="title" label="Title" />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                  <Expander render={ renderExpander } />
                </Table>
              </Col>
              <Col span={ 12 }>
                <DisplayText>Table with loader</DisplayText>
                <Table data={ data.slice(0, 10) } loading={ this.state.loading }>
                  <Column name="id" label="ID" />
                  <Column name="title" label="Title" complex />
                  <Column name="tags" label="Tags" renderCell={ tags => tags.join(', ') } />
                </Table>
                <Button onClick={ reload }>Reload</Button>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
