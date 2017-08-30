import React from 'react';
import DisplayText from '../components/display-text';
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
  });
}

const toggleExpander = (prop, item, column, instance) => (
  <Icon icon='ion-arrow-right-b' className={c('table--expander-button', {
    'table--expander-button--expanded': instance.state.expanded,
  })} onClick={() => instance.toggleExpand()} />
);

const renderExpander = item => item.description;

export default class Tables extends React.Component {
  static displayName = 'TablesPage'

  state = {
    data: data.slice(),
  };

  componentDidMount() {
    setInterval(() => {
      if (Math.random() > 0.5) {
        const index = Math.floor(Math.random() * this.state.data.length);
        this.setState({
          data: this.state.data.filter((_, i) => i != index),
        });
      } else {
        this.setState({
          data: [...this.state.data, {
            id: ++i,
            title: lipsum({count: 1, units: 'sentences'}),
            description: lipsum({count: 2, units: 'paragraphs'}),
          }],
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <DisplayText>Buttons</DisplayText>
        <div className="buttons-page">
          <Card>
            <Row>
              <Col span={ 12 }>
                <Table data={data.slice()} sticky>
                  <Column name='expander' label='' renderCell={toggleExpander} />
                  <Column name='id' label='ID'/>
                  <Column name='title' label='Title' />
                  <Expander render={renderExpander} />
                </Table>
              </Col>
              <Col span={ 12 }>
                <Table data={data.slice(0, 10)}>
                  <Column name='expander' label='' renderCell={toggleExpander} />
                  <Column name='id' label='ID'/>
                  <Column name='title' label='Title' />
                  <Expander render={renderExpander} />
                </Table>
              </Col>
              <Col span={ 12 }>
                <Table data={this.state.data}>
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
