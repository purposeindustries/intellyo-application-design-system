import React from 'react';
import { Tab, TabPanel } from '../components/tab-panel';
import Box from '../components/box';

export default class TabPanels extends React.Component {
  static displayName = 'TabPanels'
  render() {
    return (
      <div className="tab-panels-page">
        <TabPanel isSticky={ true }>
          <Tab title="General">
            <Box>
              General
            </Box>
          </Tab>
          <Tab title="Projects">
            <Box>
              Projects
            </Box>
          </Tab>
          <Tab title="Workflow">
            <Box>
              Workflow
            </Box>
          </Tab>
          <Tab title="Members">
            <Box>
              Members
            </Box>
          </Tab>
        </TabPanel>
        <TabPanel>
          <Tab title="Create">
            <Box>
              Create
            </Box>
          </Tab>
          <Tab title="Plan">
            <Box>
              Plan
            </Box>
          </Tab>
          <Tab title="Assign">
            <Box>
              Assign
            </Box>
          </Tab>
          <Tab title="Distribute">
            <Box>
              Distribute
            </Box>
          </Tab>
        </TabPanel>
      </div>
    );
  }
}
