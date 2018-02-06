import React from 'react';
import Row from '../components/row/';
import Col from '../components/col/';
import Section from '../components/section/';
import Box from '../components/box/';
import Button from '../components/button';
import Icon from '../components/icon';

export default class Sections extends React.Component {
  static displayName = 'Sections'

  render() {
    return (
      <div className="sections-page">
        <Box>
          <Row>
            <Col span={ 6 }>
              <Section
                title="Profile"
              >
                <div>Some ultimate content goes here</div>
              </Section>
            </Col>
            <Col span={ 6 }>
              <Section
                title="Organisations"
                titleCaption="This is where you can configure the organisations, which you are member or admin of."
              >
                <div>Hello bello</div>
              </Section>
            </Col>
            <Col span={ 6 }>
              <Section
                title="Integrations"
                titleCaption="This is where you can configure caption of your section."
              >
                <div>Hello bello</div>
              </Section>
            </Col>
          </Row>
        </Box>
        <Row>
          <Col span={ 6 }>
            <Box>
              <Section
                title="Danger Zone"
                titleCaption="Warning: by deleting this, you're going to loose all your data."
                icon={ <Icon icon="ion-alert-circled" /> }
                footer={ (
                  <Button danger>
                    Delete
                  </Button>
                ) }
              >
                Ez veszelyes!
              </Section>
            </Box>
          </Col>
        </Row>
      </div>
    );
  }
}
