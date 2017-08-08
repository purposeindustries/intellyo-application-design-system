import React, { Component } from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Icon from '../components/icon';

export default class CardsPage extends Component {
  static displayName = 'CardsPage'

  render() {
    return (
      <div className="page-cards">
        <Card>
          <Row>
            <Col span={ 12 }>
              <Card title="Title goes here">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis. Mauris fringilla vehicula rutrum. Vivamus sollicitudin luctus ante sit amet interdum.
              </Card>
              <Card title="Title goes here" titleCaption="And you can add caption too">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis. Mauris fringilla vehicula rutrum. Vivamus sollicitudin luctus ante sit amet interdum.
              </Card>
              <Card title="Title goes here" titleCaption="And you can add caption too" icon={ (<Icon icon="ion-information-circled" />) }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit orci vitae sem vestibulum sagittis. Mauris fringilla vehicula rutrum. Vivamus sollicitudin luctus ante sit amet interdum.
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
