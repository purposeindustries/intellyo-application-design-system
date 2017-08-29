import React from 'react';
import DisplayText from '../components/display-text';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import {Table, Column, Expander} from '../components/table';
import lipsum from 'lorem-ipsum';

const data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    id: i + 1,
    title: lipsum({count: 1, units: 'sentences'}),
    description: lipsum({count: 2, units: 'paragraphs'}),
  });
}

const toggleExpander = (prop, item, column, instance) => (
  <button onClick={() => instance.toggleExpand()}>v</button>
);

const renderExpander = item => item.description;

export default class Tables extends React.Component {
  displayName = 'TablesPage'
  render() {
    return (
      <div>
        <DisplayText>Buttons</DisplayText>
        <div className="buttons-page">
          <Card>
            <Row>
              <Col span={ 12 }>
                <Table data={data}>
                  <Column name='expander' label='' renderCell={toggleExpander} />
                  <Column name='id' label='ID'/>
                  <Column name='title' label='Title' />
                  <Expander render={renderExpander} />
                </Table>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
