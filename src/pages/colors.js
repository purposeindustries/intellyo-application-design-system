import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Card from '../components/card/';
import Row from '../components/row';
import Col from '../components/col';

export default class Colors extends Component {
  static displayName = 'ColorsPage'
  render() {
    return (
      <div>
        <DisplayText tagName="h1">Colors</DisplayText>
        <div className="page-colors">

          <section className="neutral-colors">
            {
              [
                {
                  title: 'Neutral Colors',
                  palettes: [
                    [
                      '#BDBDBD',
                      '#989898',
                      '#6E6E6E',
                      '#404040',
                      '#373737',
                    ],
                    [
                      '#EFEFEF',
                      '#E6E6E6',
                      '#DCDCDC',
                      '#D1D1D1',
                      '#B5B5B5',
                    ],
                  ]
                },
                {
                  title: 'Basic Colors',
                  palettes: [
                    [
                      '#5F9AE7',
                      '#377DE0',
                      '#0F65D9',
                      '#0053D2',
                      '#00398C',
                    ],
                    [
                      '#F9ACBC',
                      '#F67D95',
                      '#F2486A',
                      '#EE0E3B',
                      '#D10C40',
                    ],
                    [
                      '#FFDCA7',
                      '#FFC876',
                      '#FFB13D',
                      '#FF9800',
                      '#E07800',
                    ],
                    [
                      '#C1E4C3',
                      '#9FD4A1',
                      '#77C27A',
                      '#4CAF50',
                      '#429747',
                    ],
                    [
                      '#C1D9F5',
                      '#9EC3EF',
                      '#75ABE9',
                      '#4A90E2',
                      '#3D79C8',
                    ]
                  ]
                },
                {
                  title: 'Accent Colors',
                  palettes: [
                    [
                      '#D1C4E9',
                      '#B39DDB',
                      '#9575CD',
                      '#673AB7',
                      '#512DA8',
                    ],
                    [
                      '#D7CCC8',
                      '#BCAAA4',
                      '#A1887F',
                      '#795548',
                      '#5D4037',
                    ],
                    [
                      '#B2EBF2',
                      '#80DEEA',
                      '#4DD0E1',
                      '#00BCD4',
                      '#0097A7',
                    ],
                    [
                      '#FFCCBC',
                      '#FFAB91',
                      '#FF8A65',
                      '#FF5722',
                      '#E64A19',
                    ]
                  ]
                }
              ].map((section, i) => (
                <Card
                  key={ `color-section-${i}` }
                  title={ section.title }
                >
                  <Row>
                    {
                      section.palettes.map((palette, j) => (
                        <Col key={ `col-${j}` } span={ 2 }>
                          {
                            palette.map((color, k) => (
                              <div
                                key={ `color-${color}-${k}` }
                                className="color"
                                style={ {
                                  background: color
                                } }
                              >
                                { color }
                              </div>
                            ))
                          }
                        </Col>

                      ))
                    }
                  </Row>
                </Card>
              ))
            }
          </section>
        </div>
      </div>
    );
  }
}
