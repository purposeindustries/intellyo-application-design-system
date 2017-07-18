import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Sidebar, { SidebarItem } from '../components/sidebar';

import '../../css/main.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div className="main">
        <Helmet
          title="Intellyo's Application Design System"
          meta={[
            { name: "description", content: "The official style guide to build awesome applications here at Intellyo" },
            { name: "keywords", content: "intellyo, design system, ux, style guide, frontend framework, fef" },
          ]}
        />
        <Sidebar>
          <SidebarItem href="/grid">
            Grid System
          </SidebarItem>
          <SidebarItem href="/typography">
            Typography
          </SidebarItem>
          <SidebarItem href="/colors">
            Colors
          </SidebarItem>
        </Sidebar>
        <div className="content">
          { this.props.children() }
        </div>
      </div>
    )
  }
}
