import React, { Component } from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Accordion, { AccordionItem } from '../components/accordion';
import Icon from '../components/icon';

export default class Accordions extends Component {
  displayName = 'Accordions'
  render() {
    return (
      <div>
        <div className="accordions-page">
          <Card
            title="Accordion"
            titleCaption="where every children can be opened"
          >
            <Row>
              <Col span={ 12 }>
                <Accordion>
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
                </Accordion>
              </Col>
            </Row>
          </Card>
          <Card
            title="Accordion"
            titleCaption="where only one child can be opened"
          >
            <Row>
              <Col span={ 12 }>
                <Accordion openMultiple={ false }>
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
                </Accordion>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}
