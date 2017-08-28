import React, { Component } from 'react';
import Icon, { icons } from '../components/icon';
import DisplayText from '../components/display-text';
import Card from '../components/card/';

export default class Icons extends Component {
  displayName = 'IconsPage'
  render() {
    return (
      <div>
        <DisplayText>Icons</DisplayText>
        <div className="icons-page">
          <section>
            <a href="http://ionicons.com/">Official Ionicons Website</a>
          </section>
          <section>
            {
              icons.map((icon, i) => {
                return (
                  <Card
                    footer={ icon.tags[0] }
                    key={ `icon-${i}` }
                  >
                    <Icon
                      icon={ icon.tags[0] }
                      fontSize="30px"
                    />
                  </Card>
                );
              })
            }
          </section>
        </div>
      </div>
    );
  }
}
