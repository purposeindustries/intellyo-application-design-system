import React, { Component } from 'react';
import DisplayText from '../components/display-text/';
import Row from '../components/row/';
import Col from '../components/col/';
import Card from '../components/card/';

export default class Grid extends Component {
  static displayName = 'GridPage'
  render() {
    return (
      <div>
        <DisplayText tagName="h1">
          Grid System
        </DisplayText>
        <div className="page-grid">
          <Card>
            {
              [...Array(12)].map((col, i) => {
                const span = 12 / (i + 1);
                if (!Number.isInteger(span)) {
                  return null;
                }
                return (
                  <Row key={ `row-${i}` } gutter={ 15 }>
                    {
                      [...Array(i + 1)].map((row, j) => {
                        return (
                          <Col key={ `col-${j}` } span={ span }>
                            <span>
                              { j + 1 }
                            </span>
                          </Col>
                        );
                      })
                    }
                  </Row>
                );
              })
            }
          </Card>
          <Card>
            <Row gutter={ 15 }>
              <Col span={ 12 * 3 / 4 }>
                <span>3 / 4</span>
              </Col>
              <Col span={ 12 * 1 / 4 }>
                <span>1 / 4</span>
              </Col>
            </Row>
            <Row gutter={ 15 }>
              <Col span={ 12 * 1 / 3 }>
                <span>1 / 3</span>
              </Col>
              <Col span={ 12 * 2 / 3 }>
                <span>2 / 3</span>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
