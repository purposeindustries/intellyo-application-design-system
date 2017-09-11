import React, { Component } from 'react';
import DisplayText from '../components/display-text';
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
        <DisplayText>
          Accordions
        </DisplayText>
        <div className="accordions-page">
          <Card>
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
