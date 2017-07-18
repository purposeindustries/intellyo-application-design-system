import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';

export default class Colors extends Component {
  render() {
    return (
      <div>
        <DisplayText tagName="h1">Colors</DisplayText>
        <div className="page-colors">

          <section className="neutral-colors">
            <Card
              title="Neutral colors"
            >
              <Row>
                <Col span={ 2 }>
                  {
                    [
                      '#BDBDBD',
                      '#989898',
                      '#6E6E6E',
                      '#404040',
                      '#373737',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#EFEFEF',
                      '#E6E6E6',
                      '#DCDCDC',
                      '#D1D1D1',
                      '#B5B5B5',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
              </Row>
            </Card>
            <Card
              title="Basic colors"
            >
              <Row>
                <Col span={ 2 }>
                  {
                    [
                      '#A8E9EB',
                      '#76DDDF',
                      '#3ECED2',
                      '#01BFC4',
                      '#019DA1',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#F9ACBC',
                      '#F67D95',
                      '#F2486A',
                      '#EE0E3B',
                      '#D10C40',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#FFDCA7',
                      '#FFC876',
                      '#FFB13D',
                      '#FF9800',
                      '#E07800',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#C1E4C3',
                      '#9FD4A1',
                      '#77C27A',
                      '#4CAF50',
                      '#429747',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#C1D9F5',
                      '#9EC3EF',
                      '#75ABE9',
                      '#4A90E2',
                      '#3D79C8',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
              </Row>
            </Card>
            <Card
              title="Other colors"
            >
              <Row>
                <Col span={ 2 }>
                  {
                    [
                      '#D1C4E9',
                      '#B39DDB',
                      '#9575CD',
                      '#673AB7',
                      '#512DA8',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#D7CCC8',
                      '#BCAAA4',
                      '#A1887F',
                      '#795548',
                      '#5D4037',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#B2EBF2',
                      '#80DEEA',
                      '#4DD0E1',
                      '#00BCD4',
                      '#0097A7',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
                <Col span={ 2 }>
                  {
                    [
                      '#FFCCBC',
                      '#FFAB91',
                      '#FF8A65',
                      '#FF5722',
                      '#E64A19',
                    ]
                      .map((color, i) => (
                      <div key={ `color-black-${i}` } className="color" style={ {
                        background: color
                      } }>
                        { color }
                      </div>
                    ))
                  }
                </Col>
              </Row>
            </Card>
          </section>
        </div>
      </div>
    );
  }
}
