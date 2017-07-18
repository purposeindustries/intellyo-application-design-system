import React, { Component } from 'react';
import DisplayText from '../components/display-text';
import Heading from '../components/heading';
import Subheading from '../components/subheading';
import Caption from '../components/caption';
import Row from '../components/row';
import Col from '../components/col';

export default class Typography extends Component {
  render() {
    return (
      <div className="page-typography">
        <DisplayText tagName="h1">
          Typography
        </DisplayText>
        <section>
          <ul>
            {
              [
                {
                  name: 'extra-large',
                  label: 'Extra large',
                  family: 'Open Sans',
                  font: '28px / 42px',
                  weight: 'Semibold'
                },
                {
                  name: 'large',
                  label: 'Large',
                  family: 'Open Sans',
                  font: '24px / 36px',
                  weight: 'Semibold'
                },
                {
                  name: 'regular',
                  label: 'Regular',
                  family: 'Open Sans',
                  font: '21px / 31,5px',
                  weight: 'Semibold'
                },
                {
                  name: 'small',
                  label: 'Small',
                  family: 'Open Sans',
                  font: '16px / 24px',
                  weight: 'Semibold'
                },
              ].map((size, i) => (
                <li key={ `display-text-style-${i}` }>
                  <Row gutter={ 15 }>
                    <Col span={ 6 }>
                      <DisplayText size={ size.name }>
                        Display text ({ size.label })
                      </DisplayText>
                    </Col>
                    <Col span={ 6 }>
                      <span>
                        <ul>
                          <li>{ size.family }</li>
                          <li>{ size.font }</li>
                          <li>{ size.weight }</li>
                        </ul>
                      </span>
                    </Col>
                  </Row>
                </li>
              ))
            }
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <Heading>
                    Heading
                  </Heading>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>17px / 21,5px</li>
                      <li>Semibold</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <Subheading>
                    Subheading
                  </Subheading>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>13px / 19,5px</li>
                      <li>Semibold</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <span>Body</span>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>14px / 21px</li>
                      <li>Regular</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <Caption>
                    Caption
                  </Caption>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>12px / 18px</li>
                      <li>Regular</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <span className="button-text-style">
                    Button
                  </span>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>12px / 18px</li>
                      <li>Semibold</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
            <li>
              <Row gutter={ 15 }>
                <Col span={ 6 }>
                  <span className="button-small-text-style">
                    Button (small)
                  </span>
                </Col>
                <Col span={ 6 }>
                  <span>
                    <ul>
                      <li>Open Sans</li>
                      <li>10px / 15px</li>
                      <li>Regular</li>
                    </ul>
                  </span>
                </Col>
              </Row>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
