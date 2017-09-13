import React, { Component } from 'react';
import Card from '../components/card';
import Row from '../components/row';
import Col from '../components/col';
import Avatar from '../components/avatar';
import Caption from '../components/caption';
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
                    <div className="accordion-example">
                      <Avatar
                        name="Donald Trump"
                        src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                        size="medium"
                      />
                      <div className="accordion-example-inner-wrapper">
                        <p className="accordion-example-action">Donald Trump Assigned the project to Norbi Gaal for copy editing</p>
                        <Caption>22 hrs ago</Caption>
                      </div>
                    </div>
                    <div className="accordion-example">
                      <Avatar
                        name="Norbert Gaal"
                        src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/10686958_776463182416846_6951421580753737633_n.jpg?oh=59a64e2aaa6fb5615dab773797ed55b9&oe=5A45D2C9"
                        size="medium"
                      />
                      <div className="accordion-example-inner-wrapper">
                        <p className="accordion-example-action">Norbi Gaal Assigned the project to Bence Danyi for copy editing</p>
                        <Caption>11 hrs ago</Caption>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    title="History"
                    icon={ (<Icon icon="ion-ios-clock" />) }
                  >
                    <div className="accordion-example">
                      <Avatar
                        name="Norbert Gaal"
                        src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/10686958_776463182416846_6951421580753737633_n.jpg?oh=59a64e2aaa6fb5615dab773797ed55b9&oe=5A45D2C9"
                        size="medium"
                      />
                      <div className="accordion-example-inner-wrapper">
                        <p className="accordion-example-action">Norbi Gaal Assigned the project to Bence Danyi for copy editing</p>
                        <Caption>11 hrs ago</Caption>
                      </div>
                    </div>
                    <div className="accordion-example">
                      <Avatar
                        name="Donald Trump"
                        src="http://az616578.vo.msecnd.net/files/2016/11/10/6361441079692610831635571641_nast.jpg"
                        size="medium"
                      />
                      <div className="accordion-example-inner-wrapper">
                        <p className="accordion-example-action">Donald Trump Assigned the project to Norbi Gaal for copy editing</p>
                        <Caption>22 hrs ago</Caption>
                      </div>
                    </div>
                    <div className="accordion-example">
                      <Avatar
                        name="Norbert Gaal"
                        src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/10686958_776463182416846_6951421580753737633_n.jpg?oh=59a64e2aaa6fb5615dab773797ed55b9&oe=5A45D2C9"
                        size="medium"
                      />
                      <div className="accordion-example-inner-wrapper">
                        <p className="accordion-example-action">Norbi Gaal Assigned the project to Bence Danyi for copy editing</p>
                        <Caption>11 hrs ago</Caption>
                      </div>
                    </div>
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
                    isOpen={ this.state.accordion.basic }
                    onClick={ () => this.toggle('basic') }
                  >
                    Not much.
                  </AccordionItem>
                  <AccordionItem
                    title="History"
                    icon={ (<Icon icon="ion-ios-clock" />) }
                    isOpen={ this.state.accordion.history }
                    onClick={ () => this.toggle('history') }
                  >
                    Idk.
                  </AccordionItem>
                  <AccordionItem
                    title="Notes"
                    icon={ (<Icon icon="ion-ios-list" />) }
                    isOpen={ this.state.accordion.notes }
                    onClick={ () => this.toggle('notes') }
                  >
                    Accordion de Sur Mer
                  </AccordionItem>
                  <AccordionItem
                    title="Content Quality Analyser"
                    icon={ (<Icon icon="ion-connection-bars" />) }
                    isOpen={ this.state.accordion.cqa }
                    onClick={ () => this.toggle('cqa') }
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
