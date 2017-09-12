import React, { Component } from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import {
  AccordionItem,
  Accordion,
  MultiAccordion,
  SingleAccordion
} from '../components/accordion';
import Icon from '../components/icon';

export default class Accordions extends Component {
  displayName = 'Accordions'
  state = {
    accordion: {}
  }
  toggle = (id) => {
    this.setState((state) => {
      return {
        accordion: {
          ...state.accordion,
          [id]: !state.accordion[id]
        }
      };
    });
  }
  render() {
    return (
      <div>
        <div className="accordions-page">
          <Card
            title="MultiAccordion"
            titleCaption="where every children can be opened"
          >
            <Row>
              <Col span={ 12 }>
                <MultiAccordion>
                  <AccordionItem
                    title="Basic information"
                    id="basic"
                    icon={ (<Icon icon="ion-information-circled" />) }
                  >
                    Not much.
                  </AccordionItem>
                  <AccordionItem
                    title="History"
                    icon={ (<Icon icon="ion-ios-clock" />) }
                  >
                    Idk.
                  </AccordionItem>
                  <AccordionItem
                    title="Notes"
                    icon={ (<Icon icon="ion-ios-list" />) }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                  <AccordionItem
                    title="Content Quality Analyser"
                    icon={ (<Icon icon="ion-connection-bars" />) }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                </MultiAccordion>
              </Col>
            </Row>
          </Card>
          <Card
            title="SingleAccordion"
            titleCaption="where only one child can be opened"
          >
            <Row>
              <Col span={ 12 }>
                <SingleAccordion>
                  <AccordionItem
                    title="Basic information"
                    icon={ (<Icon icon="ion-information-circled" />) }
                  >
                    Not much.
                  </AccordionItem>
                  <AccordionItem
                    title="History"
                    icon={ (<Icon icon="ion-ios-clock" />) }
                  >
                    Idk.
                  </AccordionItem>
                  <AccordionItem
                    title="Notes"
                    icon={ (<Icon icon="ion-ios-list" />) }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                  <AccordionItem
                    title="Content Quality Analyser"
                    icon={ (<Icon icon="ion-connection-bars" />) }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                </SingleAccordion>
              </Col>
            </Row>
          </Card>
          <Card
            title="Accordion"
            titleCaption="Simple stateless accordion. You're the boss!"
          >
            <Row>
              <Col span={ 12 }>
                <Accordion>
                  <AccordionItem
                    title="Basic information"
                    icon={ (<Icon icon="ion-information-circled" />) }
                    id="basic"
                    isOpen={ this.state.accordion.basic }
                    onClick={ this.toggle }
                  >
                    Not much.
                  </AccordionItem>
                  <AccordionItem
                    title="History"
                    icon={ (<Icon icon="ion-ios-clock" />) }
                    id="history"
                    isOpen={ this.state.accordion.history }
                    onClick={ this.toggle }
                  >
                    Idk.
                  </AccordionItem>
                  <AccordionItem
                    title="Notes"
                    icon={ (<Icon icon="ion-ios-list" />) }
                    id="notes"
                    isOpen={ this.state.accordion.notes }
                    onClick={ this.toggle }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                  <AccordionItem
                    title="Content Quality Analyser"
                    icon={ (<Icon icon="ion-connection-bars" />) }
                    id="cqa"
                    isOpen={ this.state.accordion.cqa }
                    onClick={ this.toggle }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
